<template>
  <div class="sm:col-12 md:col-12 lg:col-4 xl:col-4 " >
      <Card class="bg-cyan-100 h-full flex justify-content-center">
        <template #title>Bilet-check.ru <br> билеты на автобус</template>
        <template #content>
          <div class="col-12 " >
            <Route class="mt-2 col-12 border-round border-1 border-cyan-500" />
            <Passengers class="mt-2 border-round border-1 border-cyan-500" />
            <Dates class="my-2 border-round border-1 border-cyan-500" />
            <Submit />
          </div>
        </template>
      </Card>
    </div>
</template>
  
<script setup>
import { ref, onMounted, provide } from 'vue'
import Route from './Route.vue'
import Passengers from './Passengers.vue'
import Dates from './Dates.vue'
import Submit from './Submit.vue'

const pointsA = ref()
const pointsB = ref()
const selectedPointA=ref('')
const selectedPointB=ref('')
const arivalDate=ref()//new Date()

const updateselectedPointA=(newVal)=> { 
  selectedPointA.value = newVal.value
}
const updateselectedPointB=(newVal)=> {
  selectedPointB.value = newVal.value
}
provide('DATA_TO_ROUTE_pointA', pointsA.value)
provide('DATA_TO_ROUTE_pointB', pointsB.value)
provide('DATA_TO_ROUTE_selectedPointA', {selectedPointA, updateselectedPointA})
provide('DATA_TO_ROUTE_selectedPointB', {selectedPointB, updateselectedPointB})
provide('DATA_FROM_SUBMIT', arivalDate)
</script>
  
  