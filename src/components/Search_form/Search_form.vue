<template>
  <div class="sm:col-12 md:col-12 lg:col-4 xl:col-4" >
      <Card class="bg-cyan-100">
        <template #title>Bilet-check.ru <br> билеты на автобус</template>
        <template #content >
          <div class="grid h-27rem align-items-center col-12">
            <Route class="col-12 m-1 border-round border-1 border-cyan-500" />
            <Passengers class="col-12 m-1 border-round border-1 border-cyan-500" />
            <Dates class="col-12 m-1 border-round border-1 border-cyan-500" />
            <Submit class="m-1 justify-content-end" />
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
const arivalDate=ref(new Date())

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
  
  