<script setup>
import Flight_list from './Flight_list.vue';
import { ref, onMounted,inject,toRef,toRefs } from 'vue'
const tripsList = toRef(inject('DATA_FROM_FLF'))
</script>

<template>
    <div class="sm:col-12 md:col-12 lg:col-8 xl:col-8 flex" >
        <Card class="bg-cyan-100" v-if="tripsList.length > 0" >
            <template #title>Найдено рейсов ({{ tripsList.length }}): </template>
            <template #content>
                <Flight_list />
            </template>
        </Card>
        <Card v-else class="h-full w-full bg-cyan-100 flex justify-content-center align-items-center">
            <template #content>
                <span>Список рейсов пуст</span>
            </template>
        </Card>
      </div>
</template>