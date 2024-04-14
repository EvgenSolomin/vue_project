<template>
    <div class="grig" >
        <Route class="col-12 m-1 border-round border-1 border-cyan-500" />
        <Passengers class="col-12 m-1 border-round border-1 border-cyan-500" />
        <Dates class="col-12 m-1 border-round border-1 border-cyan-500" />
        <Submit class="m-1 justify-content-end" />
    </div>
    <div class="grid">
      <div class="col-12" >
        <!-- {{ selectedPointA.name }}-{{ selectedPointB.name }} -->
      </div>
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

</script>
  
  