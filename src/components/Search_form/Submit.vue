<template>
    <div class="flex m-1 justify-content-end p-1">
        <Button label="Поиск" @click="searchTrips(selectedPointA,selectedPointB,arivalDate.toLocaleDateString('ru-RU'))"/>
    </div>
</template>
<style scoped>
</style>
<script setup>
import { ref, onMounted,inject,toRef,toRefs } from 'vue'
const {arivalDate,searchTrips}  = toRefs(inject('DATA_FROM_FLF'))
const {selectedPointA}  = toRefs(inject('DATA_TO_ROUTE_selectedPointA'))
const {selectedPointB}  = toRefs(inject('DATA_TO_ROUTE_selectedPointB'))
</script>