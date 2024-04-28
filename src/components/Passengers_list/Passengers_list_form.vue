<script setup>
import { ref, inject, toRef, toRefs, onMounted } from "vue";
import { ReferenceBookService } from "@/services/ReferenceBookService";
const show_form = true; //toRef(inject('DATA_TO_FL'))
const passengers_list = toRef(inject("DATA_TO_p-list"));
const sexarr = ["Мужской", "Женский"];
const citezenshipsOption = ref([]);
const docTypes = ref([]);

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
function getClass(index){
  return passengers_list.value[index].child == 0 ? "": "bg-blue-500"
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
            <Card class="mx-2 w-23rem" :class="getClass(index)">
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
                    v-model="passenger.doc"
                  />
                  <!-- <InputMask
                    placeholder="Серия/Номер паспорта"
                    mask="9999/999-999"
                    v-if="passenger.doc == 'Паспорт'"
                    v-model="passenger.passport"
                  /> -->
                </div>
              </template>
            </Card>
          </div>
        </div>
        <div class="w-full my-2 flex justify-content-end">
          <Button label="Купить" :disabled="disabled_btn()" />
        </div>
      </template>
    </Card>
  </div>
</template>
