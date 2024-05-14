<template>
  <div class="field">
    <div class="grid h-30rem">
      <Search_form />
      <Flight_list/>
    </div>
    <div class="grid">
      <Passengers_list class="col-12"/>
    </div>
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted,provide } from 'vue'
import Search_form from './components/Search_form/Search_form.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'
import Passengers_list from './components/Passengers_list/Passengers_list_form.vue';

const tripsList=ref([])

const adult = ref(1)
const child = ref(0)
const show_form = ref(false)
const passengers_list = ref([{
    id: 0,
    name: null,
    surname: null,
    patronymic: null,
    bd: null,
    sex:null,
    nationality: null,
    doc_type: null,
    doc_number: null,
    child:0,
}])

provide('DATA_FROM_FLF', tripsList)
provide('DATA_TO_FL', show_form)
provide('DATA_FROM_PASSENGERS', {adult, child})
provide('DATA_TO_p-list', passengers_list)
</script>