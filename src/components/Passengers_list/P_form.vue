<template>
    <Card class="card">
        <template #title>
            <h4>Список пассажиров</h4>
        </template>
        <template #content >
            <div class="null">
                Список пассажиров пуст
            </div>
            <div class="flex flex-column p-1 border-round border-1 border-cyan-500">
                <InputText class="m-1" v-model="passeger.name" placeholder="Фамилия" />
                <InputText class="m-1"  v-model="passeger.surname" placeholder="Имя"/>
                <InputText class="m-1" v-model="passeger.patronymic" placeholder="Отчество"/>
                <Calendar class="m-1" v-model="passeger.bd" showIcon  placeholder="Дата рождения"/>
                <Dropdown class="m-1" v-model="passeger.sex" placeholder="Пол" :options="sexarr" />
                <InputText class="m-1" v-model="passeger.nationality" placeholder="Гражданство"  />
                <Dropdown class="m-1" v-model="passeger.doc" placeholder="Документ" :options="docarr"/>
                <InputMask class="m-1" v-model="passeger.passport" v-if="passeger.doc != ''" placeholder="Серия/Номер паспорта" mask="9999/999-999"/>
            </div>            
        </template>
    </Card>
</template>

<script>
import { ref } from 'vue';

const passeger = ref({
                name: null,
                surname: null,
                patronymic: null,
                bd: null,
                sex:'',
                nationality: null,
                doc: null,
                passport: null
            })
const sexarr = ref(['Мужской', 'Женский'])
const docarr = ref(['Паспорт'])

</script>

