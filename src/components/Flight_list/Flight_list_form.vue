<script setup>
import { SearchFlights } from '@/services/SearchFlight';
import { ref } from 'vue'

const trips = SearchFlights.getFlights();

</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <DataTable :value="trips" dataKey="id_trip" stripedRows>
                <Column header="Город отправления">
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.from_name_point }}<br>
                        </div>
                        <div class="text-xs">
                            {{ data.from_name }}
                        </div>
                         
                        
                    </template>
                </Column>

                <Column header="Время отправления" >
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.time_trip }} <br>
                        </div>
                        <div class="text-xs">
                            <!--Стилизовать дату-->
                            {{ data.date_trip }}
                        </div>
                        
                        
                    </template>
                </Column>

                <!--Стилизовать время-->
                <Column header="Время в пути" field="time_duration_trip">
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.time_duration_trip }} <br>
                        </div>
                    </template>
                </Column>

                <Column header="Город прибытия" >
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.to_name_point }} <br>
                        </div>
                        <div class="text-xs">
                            {{ data.to_name }}
                        </div>
                    </template>
                </Column>

                <Column header="Время прибытия" >
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.time_arrival_trip }} <br>
                        </div>
                        <div class="text-xs">
                            {{ data.date_arrival_trip }}
                        </div>
                    </template>
                </Column>

                <Column >
                    <template #body="{ data }">
                        <Button :disabled="data.count_available_seats_trip < 1" :label= "data.count_available_seats_trip<1 ? 'Недостаточно мест' : 'Купить: ' + data.full_ticket_price + ' руб'" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<style scoped>

</style>