<template>
  <div class="content">
    
    <div class="flex h-30rem">
      <Search_form />
      <Flight_list/>
    </div>
    <div class="col-12">
      <Passengers_list/>
    </div>
      
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted,provide } from 'vue'
import Search_form from './components/Search_form/Search_form.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'
import Passengers_list from './components/Passengers_list/Passengers_list.vue';

const tripsList=ref([])

const adult = ref(1)
const child = ref(0)
const show_form = ref(false)
provide('DATA_FROM_FLF', tripsList)
provide('DATA_TO_FL', show_form)
provide('DATA_FROM_PASSENGERS', {adult, child})
</script>

<style scoped>

</style>