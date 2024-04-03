<script>
import { SearchFlights } from '@/services/SearchFlight';

export default {
    data(){
        return{
            trips: SearchFlights.getFlights()
        }
    },
    methods:{
        formatTime(time){
            let res = time.indexOf(':');
            let hours = time.slice(0, res);
            let minuts = time.slice(res+1);
            if (minuts != '00')
                time = hours + " часов\n" + minuts + " минут";
            else
                time = hours + " часов";
            return time;
        },
        dateFormat(input_date){
            return new Date(input_date).toLocaleDateString('ru-RU')
        },
        countAvailableSeatsTrip(available_seats){
            if(available_seats == 0)
                return " - "
            else
                return available_seats
        }
    }
}

</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <DataTable :value="trips" dataKey="id_trip" stripedRows removableSort>
                <Column header="Город отправления" sortable>
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.from_name_point }}<br>
                        </div>
                        <div class="text-xs">
                            {{ data.from_name }}
                        </div>
                         
                        
                    </template>
                </Column>

                <Column header="Время отправления" sortable>
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.time_trip }} <br>
                        </div>
                        <div class="text-xs">
                            {{ dateFormat(data.date_trip) }}
                        </div>
                        
                        
                    </template>
                </Column>

                <Column header="Время в пути" sortable>
                    <template #body="{ data }">
                        <div class="font-semibold text-sm">
                            {{ formatTime(data.time_duration_trip) }}
                        </div>
                    </template>
                </Column>

                <Column header="Город прибытия" sortable>
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.to_name_point }} <br>
                        </div>
                        <div class="text-xs">
                            {{ data.to_name }}
                        </div>
                    </template>
                </Column>

                <Column header="Время прибытия" sortable>
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ data.time_arrival_trip }} <br>
                        </div>
                        <div class="text-xs">
                            {{ dateFormat(data.date_arrival_trip)  }}
                        </div>
                    </template>
                </Column>

                <Column header="Места" sortable>
                    <template #body="{ data }">
                        <div class="font-bold">
                            {{ countAvailableSeatsTrip( data.count_available_seats_trip ) }}
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