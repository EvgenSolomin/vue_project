<template>
  <div class="content m-2">
    
    <div class="grid">
      <Search_form/>
      <Flight_list/>
    </div>
    <!-- <div class="grid" >
      <div class="col-12 ">
        <Card class="bg-cyan-100">
          <template #title>Данные пассажиров: </template>
          <template #content>
            <Passengers_list/>
          </template>
        </Card>
      </div>
    </div> -->
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted,provide } from 'vue'
import Search_form from './components/Search_form/Search_form.vue'
import Passengers_list from './components/Passengers_list/P_main.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'

const tripsList=ref([])

const adult = ref(1)
const child = ref(0)
provide('DATA_FROM_FLF', tripsList)
provide('DATA_FROM_PASSENGERS', {adult, child})
</script>

<style scoped>

</style>