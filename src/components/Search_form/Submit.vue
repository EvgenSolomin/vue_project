<template>
  <div class="flex justify-content-end">
    <Button
      :disabled="isDisabled()"
      icon="pi pi-search"
      label="Поиск"
      :loading="loading"
      @click="
        searchTrips(
          selectedPointA,
          selectedPointB,
          arivalDate.toLocaleDateString('ru-RU')
        )
      "
    />
  </div>
</template>
<style scoped></style>
<script setup>
import { ref, onMounted, inject, toRef, toRefs } from "vue";
import { SearchFlights } from "@/services/SearchFlight";
import { useToast } from "primevue/usetoast";
const toast = useToast();
const tripsList = toRef(inject("DATA_FROM_FLF"));
const arivalDate = toRef(inject("DATA_FROM_SUBMIT"));
const { selectedPointA } = toRefs(inject("DATA_TO_ROUTE_selectedPointA"));
const { selectedPointB } = toRefs(inject("DATA_TO_ROUTE_selectedPointB"));
const loading = ref(false);
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
