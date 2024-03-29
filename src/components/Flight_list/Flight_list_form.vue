<script setup>
import { SearchFlights } from '@/services/SearchFlight';
import { ref } from 'vue'

const trips = SearchFlights.getFlights();

</script>

<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <DataTable :value="trips" dataKey="id_trip" stripedRows>
                <Column header="Город отправления" field="from_name_point"/>
                <Column header="Город прибытия" field="to_name_point">
                    <template #body="{ data }">
                        {{ data.to_name_point }} <br>
                        {{ data.to_address_point }}
                    </template>
                </Column>
                <Column header="Город прибытия" field="to_name_point">
                    <template #body="{ data }">
                        <Button label="Купить"/>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<style scoped>

</style>