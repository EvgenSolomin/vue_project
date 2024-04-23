<script setup>
import {ref, inject, toRef, toRefs} from 'vue'
const show_form = toRef(inject('DATA_TO_FL'))
const passengers_list = toRef(inject('DATA_TO_p-list'))
const sexarr = ['Мужской', 'Женский']
const docarr = ['Паспорт', 'Свид-во о рождении']
</script>

<template>
    <div v-if="show_form">
        <Card class="bg-cyan-100 flex justify-content-center">
            <template #title>Данные пассажиров: </template>
            <template #content>
            <div class="flex flex-row overflow-y-auto">
                <div v-for="(passenger, index) in passengers_list" :key="index" class="">
                    <Card class="mx-2 w-23rem">
                        <template #title>Пассажир №{{ (index + 1 )}} <span v-if="passenger.child">Детский</span></template>
                        <template #content >
                            <div class="flex flex-column bg-surface-300 w-20rem p-2 border-round border-1 border-cyan-500">
                                <InputText placeholder="Фамилия" v-model="passenger.name" />
                                <InputText placeholder="Имя" v-model="passenger.surname"/>
                                <InputText placeholder="Отчество" v-model="passenger.patronymic"/>
                                <Calendar placeholder="Дата рождения" showIcon  v-model="passenger.bd"/>
                                <Dropdown placeholder="Пол" :options="sexarr" v-model="passenger.sex"/>
                                <InputText placeholder="Гражданство" v-model="passenger.nationality"/>
                                <Dropdown placeholder="Документ" :options="docarr" v-model="passenger.doc"/>
                                <InputMask placeholder="Серия/Номер паспорта" mask="9999/999-999" v-if="passenger.doc == 'Паспорт'" v-model="passenger.passport"/>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
            </template>
        </Card>
    </div>
</template>