<template>
  <div class="flex justify-content-center align-items-center">
    <Calendar
      
      @date-select="tripsList=[]"
      class="m-1 w-5"
      placeholder="Дата отправления"
      v-model="arivalDate"
      :minDate="minDate"
      showIcon 
    />
    <!-- <div class="flex justify-content-end flex-wrap" >
                <Button @click="one_way" icon="pi pi-arrow-right-arrow-left"/>
            </div>
            <Calendar class="m-1 w-5" placeholder="Дата возвращения" v-show="check" v-model="p_to" :minDate="minDate"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted, inject, toRef, toRefs } from "vue";
const arivalDate = toRef(inject("DATA_FROM_SUBMIT"));
const tripsList = toRef(inject("DATA_FROM_FLF"));
const minDate = new Date();
// const p_to = ref()
// const check = ref(false)
// const one_way = () => {
//     return check.value ? check.value = false : check.value = true
// }
// const hi = ()=>{
//   tripsList.value=[]
// }
</script>
