<template>
  <div class="inline-flex justify-content-center">
    <Dropdown
      v-model="selectedPointA"
      @change="updateselectedPointA($event)"
      :options="short_from_list.value"
      filter
      @filter="create_short_list($event, pointsA, short_from_list)"
      optionLabel="name"
      placeholder="Откуда едем?"
      class="w-full md:w-14rem"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <div>
            <h5>{{ slotProps.option.name }}</h5>
            {{ slotProps.option.address }}
          </div>
        </div>
      </template>
    </Dropdown>

    <Button
      class="flex justify-content-center m-1"
      style="height: 30px; width: 30px"
      @click="reverse"
      icon="pi pi-arrows-h"
    />

    <Dropdown
      v-model="selectedPointB"
      @change="updateselectedPointB($event)"
      :options="short_to_list.value"
      filter
      @filter="create_short_list($event, pointsB, short_to_list)"
      optionLabel="name"
      placeholder="Куда едем?"
      class="w-full md:w-14rem"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <div>
            <h5>{{ slotProps.option.name }}</h5>
            {{ slotProps.option.address }}
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, toRef, toRefs } from "vue";
import { SearchFlights } from "@/services/SearchFlight";
const pointsA = toRef(inject("DATA_TO_ROUTE_pointA"));
const pointsB = toRef(inject("DATA_TO_ROUTE_pointB"));
const { selectedPointA, updateselectedPointA } = toRefs(
  inject("DATA_TO_ROUTE_selectedPointA")
);
const { selectedPointB, updateselectedPointB } = toRefs(
  inject("DATA_TO_ROUTE_selectedPointB")
);

onMounted(async () => {
  pointsA.value = await SearchFlights.getAllFrom();
  pointsB.value = await SearchFlights.getAllTo();
})

const rev = ref()
function reverse() {
  if(selectedPointA.value != '' && selectedPointB.value != ''){
    rev.value = selectedPointA.value
    selectedPointA.value = pointsA.value.filter((point_a) => point_a.name == selectedPointB.value.name)[0]
    selectedPointB.value = pointsB.value.filter((point_b) => point_b.name == rev.value.name)[0]
  }
}

const short_from_list = ref([])
const short_to_list = ref([])
function create_short_list(filter, arr, short_list){
 
  // const str = filter.value[0].toUpperCase() + filter.value.slice(1)
  if(filter.value.length > 0){
    short_list.value = arr.filter((point) => point.name.toUpperCase().includes(filter.value.toUpperCase()))
  }else{
    short_list.value = []
  }

}
</script>

<style scoped></style>
