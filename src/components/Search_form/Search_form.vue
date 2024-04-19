<template>
  <div class="sm:col-12 md:col-12 lg:col-4 xl:col-4 " >
      <Card class="bg-cyan-100 h-full flex justify-content-center">
        <template #title>Bilet-check.ru <br> билеты на автобус</template>
        <template #content class="bg-surface-500">
          <div class=" border-round border-1 border-cyan-500 p-2" >
            <Route class="mt-2 col-12 bg-surface-300 border-round border-1 border-cyan-500" />
            <Passengers class="mt-2 bg-surface-300 border-round border-1 border-cyan-500" />
            <Dates class="my-2 bg-surface-300 border-round border-1 border-cyan-500" />
            <div class="flex justify-content-end">
              <Button 
                :disabled="isDisabled()" 
                icon="pi pi-search" 
                label="Поиск" 
                :loading="loading" 
                @click="searchTrips(selectedPointA, selectedPointB, arivalDate.toLocaleDateString('ru-RU'))"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
</template>
  
<script setup>
import { ref, onMounted, provide, inject, toRef, toRefs } from "vue";
import { SearchFlights } from "@/services/SearchFlight";
import { useToast } from "primevue/usetoast";
import Route from './Route.vue'
import Passengers from './Passengers.vue'
import Dates from './Dates.vue'

const pointsA = ref()
const pointsB = ref()
const selectedPointA=ref('')
const selectedPointB=ref('')
const arivalDate=ref()

const updateselectedPointA=(newVal)=> { 
  selectedPointA.value = newVal.value
}
const updateselectedPointB=(newVal)=> {
  selectedPointB.value = newVal.value
}

const toast = useToast();
const tripsList = toRef(inject("DATA_FROM_FLF"));
const loading = ref(false);

provide('DATA_TO_ROUTE_pointA', pointsA.value)
provide('DATA_TO_ROUTE_pointB', pointsB.value)
provide('DATA_TO_ROUTE_selectedPointA', {selectedPointA, updateselectedPointA})
provide('DATA_TO_ROUTE_selectedPointB', {selectedPointB, updateselectedPointB})
provide('DATA_FROM_SUBMIT', arivalDate)

function isDisabled() {
  return selectedPointA.value == "" || selectedPointB.value == "" || arivalDate.value == undefined ? true : false;
}
const searchTrips = async (from, to, date) => {
  loading.value = true;
  tripsList.value = [];
  tripsList.value = await SearchFlights.getAllFlight(from.id_from, to.id_to, date);
  if (tripsList.value.length < 1) {
    toast.add({
      severity: "info",
      summary: "К сожалению по вашему запросу рейсов не найдено :(",
    });
  }
  loading.value = false;
};
</script>
  
  