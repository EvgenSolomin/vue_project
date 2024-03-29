<script >
import { SearchFlights } from '@/services/SearchFlight';
import { ref } from 'vue'

const trips = SearchFlights.getFlights();
const trip = ref();

/*const columns = [
    { field: 'from_name_point', header: 'Город отправления' },
    { field: 'date_trip', header: 'Дата отправления' },
    { field: 'time_trip', header: 'Время отправления' },
    { field: 'time_duration_trip', header: 'Время в пути' },
    { field: 'to_name_point', header: 'Город прибытия' },
    { field: 'date_arrival_trip', header: 'Дата прибытия' },
    { field: 'time_arrival_trip', header: 'Время прибытия' },
];*/
</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <DataTable :value="trip" stripedRows>
                <Column header="Город отправления"><template #body>{{ trip.from_name_point }} </template></Column>
                <Column header="Город прибытия"><template #body>{{ trip.to_name_point }}</template></Column>
                        
                            
                        
                    
                <!-- <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"/> -->
            </DataTable>
        </div>
    </div>
</template>
<style scoped>

</style>