<script setup>
import { ref, inject, toRef, toRefs, onMounted } from "vue";
import { ReferenceBookService } from "@/services/ReferenceBookService";
const show_form = true//toRef(inject('DATA_TO_FL'))
const passengers_list = toRef(inject("DATA_TO_p-list"));
const sexarr = ["Мужской", "Женский"];
const citezenshipsOption = ref([]);
const docTypes = ref([]);
const clickBtn = ref(false)

function disabled_btn(){
  let arr_pl = []
  let pass_bull = []
  passengers_list.value.forEach((el, i) => {
    for(const key in el)
      el[key] === null ? pass_bull.push(true) : pass_bull.push(false)  
    arr_pl.push(pass_bull.includes(true))
  });
  return arr_pl.includes(true)
}

function getMask(doc_type){
  if(doc_type == "0")
    return "9999 999999";
  else if(doc_type == "2")
    return "99 999-999";
  else if(doc_type == "4")
    return "aa-aa 999-999";
  else if(doc_type == "8")
    return "aa 9999999";
  else if(doc_type == "11")
    return "aa-aa 999-999";
  else if(doc_type == null)
    return null
  else
    return 0
}

function getInvalid(doc_type, doc_number){
  const regexpPassport = /^[0-9]{4} [0-9]{6}$/
  const regexpZagranPassportRF = /^\d{9}$/
  const regexpBirthCertificate = /^[IVXLCDM]{1,3}[А-Я^]{2}[0-9]{6}$/g
  const regexpMilitaryID = /[А-Я^]{2}[0-9]{7}$/g
  let get_invalid = null
  if(clickBtn){
    if(doc_type == "0")
      get_invalid = !regexpPassport.test(doc_number);
    else if(doc_type == "2")
      get_invalid = !regexpZagranPassportRF.test(doc_number);
    else if(doc_type == "4")
      get_invalid = !regexpBirthCertificate.test(doc_number);
    else if(doc_type == "8")
      get_invalid = !regexpMilitaryID.test(doc_number);
    if(get_invalid)
      clickBtn.value = false
    return get_invalid
  }
}

onMounted(async () => {
  await ReferenceBookService.loadNationalityList()
    .then((response) => response.json())
    .then((result) => (citezenshipsOption.value = result.result))
    .catch((error) => {
      console.log(error);
    });

  await ReferenceBookService.loadDocTypesList()
    .then((response) => response.json())
    .then((result) => {
        docTypes.value = result.result.map((res) => {
            res.name = res.name.replaceAll("&nbsp;", " ")
            return res
        })
    })
    .catch((error) => {
      console.log(error);
    });
});

</script>

<template>
  <div v-if="show_form">
    <Card class="bg-cyan-100 flex justify-content-center">
      <template #title>Данные пассажиров: </template>
      <template #content>
        <div class="flex flex-row overflow-y-auto">
          <div v-for="(passenger, index) in passengers_list" :key="index" class="">
            <Card class="mx-2 w-23rem" :class="passenger.child == 0 ? '': 'bg-blue-500'">
              <template #title
                >Пассажир №{{ index + 1 }}
                <span v-if="passenger.child">Детский</span></template
              >
              <template #content>
                <div class="flex flex-column bg-surface-300 w-20rem p-2">
                  <InputText 
                    placeholder="Фамилия" 
                    v-model="passenger.name" 
                  />
                  <InputText 
                    placeholder="Имя" 
                    v-model="passenger.surname" 
                  />
                  <InputText 
                    placeholder="Отчество" 
                    v-model="passenger.patronymic" 
                  />
                  <Calendar 
                    placeholder="Дата рождения" 
                    showIcon v-model="passenger.bd" 
                  />
                  <Dropdown 
                    placeholder="Пол" 
                    :options="sexarr" 
                    v-model="passenger.sex" 
                  />
                  <Dropdown
                    placeholder="Гражданство"
                    :options="citezenshipsOption"
                    filter
                    optionLabel="name"
                    optionValue="code"
                    v-model="passenger.nationality"
                  />
                  <Dropdown
                    placeholder="Документ"
                    :options="docTypes"
                    optionLabel="name"
                    optionValue="id"
                    v-model="passenger.doc_type"
                  />
                  <InputMask
                    placeholder="Серия/Номер"
                    v-if="getMask(passenger.doc_type) != null && getMask(passenger.doc_type) != 0"
                    :mask="getMask(passenger.doc_type)"
                    v-model="passenger.doc_number"
                    :invalid="getInvalid(passenger.doc_type, passenger.doc_number)"
                  />
                  <InputText 
                    placeholder="i t"
                    v-if="getMask(passenger.doc_type) == 0" 
                    v-model="passenger.doc_number" 
                  />
                </div>
              </template>
            </Card>
          </div>
        </div>
        <div class="w-full my-2 flex justify-content-end">
          <Button 
            label="Купить" 
            :disabled="disabled_btn()" 
            @click="clickBtn = true"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
