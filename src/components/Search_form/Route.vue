<template>
  <div class="grid justify-content-center align-items-center w-full">
    <Dropdown
      v-model="selectedPointA"
      @change="updateselectedPointA($event)"
      :options="pointA"
      filter
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

    <!-- <InputText class="col-5 m-1" v-model="pointA" type="text" placeholder="Откуда" /> -->
    <Button
      class="flex justify-content-center m-1"
      style="height: 30px; width: 30px"
      @click="reverse"
      icon="pi pi-arrows-h"
    />
    <Dropdown
      v-model="selectedPointB"
      @change="updateselectedPointB($event)"
      :options="pointB"
      filter
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
const pointA = toRef(inject("DATA_TO_ROUTE_pointA"));
const pointB = toRef(inject("DATA_TO_ROUTE_pointB"));
const { selectedPointA, updateselectedPointA } = toRefs(
  inject("DATA_TO_ROUTE_selectedPointA")
);
const { selectedPointB, updateselectedPointB } = toRefs(
  inject("DATA_TO_ROUTE_selectedPointB")
);
const rev = ref();

function reverse() {
  rev.value = selectedPointA.value;
  updateselectedPointA(selectedPointB);
  updateselectedPointB(rev);
}
onMounted(async () => {
  pointA.value = await SearchFlights.getAllFrom();
  pointB.value = await SearchFlights.getAllTo();
});
</script>

<style scoped></style>
