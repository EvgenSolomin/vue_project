<template>
    <div class="w-full p-1 " >
        <Route class="m-1 w-full border-round border-1 border-cyan-500" />
        <Passengers class="m-1 w-full border-round border-1 border-cyan-500" />
        <Dates class="m-1 w-full border-round border-1 border-cyan-500" />
        <Submit class="m-1 w-full " />
    </div>
    <div class="grid">
      <div class="col-12" >
        <!-- {{ selectedPointA.name }}-{{ selectedPointB.name }} -->
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted,provide } from 'vue'
import Route from './Route.vue'
import Passengers from './Passengers.vue'
import Dates from './Dates.vue'
import Submit from './Submit.vue'

const pointA = ref()
const pointB = ref()
const selectedPointA=ref('')
const selectedPointB=ref('')

const updateselectedPointA=(newVal)=> {
  selectedPointA.value = newVal.value
}
const updateselectedPointB=(newVal)=> {
  selectedPointB.value = newVal.value
}


provide('DATA_TO_ROUTE_pointA', pointA.value)
provide('DATA_TO_ROUTE_pointB', pointB.value)
provide('DATA_TO_ROUTE_selectedPointA', {selectedPointA, updateselectedPointA})
provide('DATA_TO_ROUTE_selectedPointB', {selectedPointB, updateselectedPointB})

</script>
  
  