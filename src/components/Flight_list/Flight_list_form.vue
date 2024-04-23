<script setup>
import { ref, onMounted,inject,toRef,toRefs } from 'vue'
const tripsList = toRef(inject("DATA_FROM_FLF"));
const show_form = toRef(inject("DATA_TO_FL"));
const { adult, child } = toRefs(inject("DATA_FROM_PASSENGERS"));

function formatTime(time) {
  if (!time) return "-";
  let res = time.indexOf(":");
  let hours = time.slice(0, res);
  let minuts = time.slice(res + 1);
  return minuts != "00"
    ? (time = hours + " часов\n" + minuts + " минут")
    : (time = hours + " часов");
}
function dateFormat(input_date) {
  return new Date(input_date).toLocaleDateString("ru-RU");
}
function countAvailableSeatsTrip(available_seats) {
  return available_seats == 0 ? " - " : available_seats;
}
function label_buy_button(available_seats_trip, adult_price, child_price) {
  return available_seats_trip < 1 || available_seats_trip < adult.value + child.value
    ? "Недостаточно мест"
    : "Купить: " + (adult_price * adult.value + child_price * child.value) + " руб";
}

function disabled_btn(available_seats_trip) {
  return available_seats_trip < 1 || available_seats_trip < adult.value + child.value ? true : false;
}
</script>

<template>
    <div class="sm:col-12 md:col-12 lg:col-8 xl:col-8 flex" >
        <Card class="bg-cyan-100" v-if="tripsList.length > 0" >
            <template #title>Найдено рейсов ({{ tripsList.length }}): </template>
            <template #content>
                <div class="overflow-hidden">
                    <div class="overflow-auto h-auto border-round border-1 border-primary-500">
                        <DataTable
                            :value="tripsList"
                            dataKey="id_trip"
                            stripedRows
                            scrollable
                            scrollHeight="23rem"
                        >
                            <Column header="Город отправления">
                            <template #body="{ data }">
                                <div class="font-bold">{{ data.from_name_point }}<br /></div>
                                <div class="text-xs">
                                {{ data.from_name }}
                                </div>
                            </template>
                            </Column>

                            <Column header="Время отправления">
                            <template #body="{ data }">
                                <div class="font-bold">{{ data.time_trip }} <br /></div>
                                <div class="text-xs">
                                {{ dateFormat(data.date_trip) }}
                                </div>
                            </template>
                            </Column>

                            <Column header="Время в пути">
                            <template #body="{ data }">
                                <div class="font-semibold text-sm">
                                {{ formatTime(data.time_duration_trip) }}
                                </div>
                            </template>
                            </Column>

                            <Column header="Город прибытия">
                            <template #body="{ data }">
                                <div class="font-bold">{{ data.to_name_point }} <br /></div>
                                <div class="text-xs">
                                {{ data.to_name }}
                                </div>
                            </template>
                            </Column>

                            <Column header="Время прибытия">
                            <template #body="{ data }">
                                <div class="font-bold">{{ data.time_arrival_trip }} <br /></div>
                                <div class="text-xs">
                                {{ dateFormat(data.date_arrival_trip) }}
                                </div>
                            </template>
                            </Column>

                            <Column header="Места">
                            <template #body="{ data }">
                                <div class="font-bold">
                                {{ countAvailableSeatsTrip(data.count_available_seats_trip) }}
                                </div>
                            </template>
                            </Column>

                            <Column>
                            <template #body="{ data }">
                                <Button
                                class="text-sm"
                                @click="show_form = true"
                                :disabled="disabled_btn(data.count_available_seats_trip)"
                                :label="
                                    label_buy_button(
                                    data.count_available_seats_trip,
                                    data.full_ticket_price,
                                    data.child_ticket_price
                                    )"/>
                            </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </template>
        </Card>
        <Card v-else class="h-full w-full bg-cyan-100 flex justify-content-center align-items-center">
            <template #content>
                <span>Список рейсов пуст</span>
            </template>
        </Card>
    </div>
</template>