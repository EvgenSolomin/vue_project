<script setup>
import { SearchFlights } from '@/services/SearchFlight';
</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <div v-for="i in SearchFlights.getFlights()" :key="i.id_trip">
                <div class="sticky top-0 font-bold bg-cyan-500 p-2 pl-4 z-1">
                    Рейс: {{ i.name_trip }} {{ i.date_trip }} {{ i.time_trip }}
                </div>
                <p class="surface-overlay p-2 m-0">
                    Отбытие: {{ i.date_trip }} {{ i.time_trip }} {{ i.from_address_point }}
                </p>
                <p class="surface-overlay p-2 m-0">
                    Прибытие: {{ i.date_arrival_trip }} {{ i.time_arrival_trip }} {{ i.to_address_point }}
                </p>
                <div class="flex justify-content-end flex-wrap">
                    <Button class="m-2 z-0">Купить: {{ i.full_ticket_price }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>