<template>
  <div class="content m-2">
    
    <div class="grid">
      <div class="sm:col-12 md:col-12 lg:col-4 xl:col-4" >
        <Card class="bg-cyan-100">
          <template #title>Bilet-check.ru <br> билеты на автобус</template>
          <template #content >
            <div class="grid h-27rem align-items-center col-12">
              <Search_form />
            </div>
          </template>
        </Card>
      </div>
      <div class="sm:col-12 md:col-12 lg:col-8 xl:col-8" v-if="tripsList.length>0">
        <Card class="bg-cyan-100">
          <template #title>Найдено рейсов ({{ tripsList.length }}): </template>
          <template #content>
            <Flight_list/>
          </template>
        </Card>
      </div>
    </div>
    <div class="grid" >
      <div class="col-12 ">
        <Card class="bg-cyan-100">
          <template #title>Данные пассажиров: </template>
          <template #content>
            <Passengers_list/>
          </template>
        </Card>
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted,provide } from 'vue'
import { SearchFlights } from '@/services/SearchFlight'
import { useToast } from "primevue/usetoast"
const toast = useToast()
import Search_form from './components/Search_form/Search_form.vue'
import Passengers_list from './components/Passengers_list/P_main.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'

const tripsList=ref([])
const arivalDate=ref(new Date())
const searchTrips=async(from,to,date)=>{
  tripsList.value=await SearchFlights.getAllFlight(from.id_from,to.id_to,date)
  if (tripsList.value.length<1){
    toast.add({ severity: 'info', summary: 'К сожалению по вашему запросу рейсов не найдено :(' });
  }
  
}

provide('DATA_FROM_FLF', {tripsList,arivalDate,searchTrips})

</script>

<style scoped>

</style>