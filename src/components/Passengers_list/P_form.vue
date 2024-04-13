<template>
    <Card>
        <template #content >
            <div class="grid border-round border-1 border-cyan-500" style="width: 300px;">
                <InputText class="w-full m-1" v-model="passeger.name" placeholder="Фамилия" />
                <InputText class="w-full m-1"  v-model="passeger.surname" placeholder="Имя"/>
                <InputText class="w-full m-1" v-model="passeger.patronymic" placeholder="Отчество"/>
                <Calendar class="w-full m-1" v-model="passeger.bd" showIcon  placeholder="Дата рождения"/>
                <Dropdown class="w-full m-1" v-model="passeger.sex" placeholder="Пол" :options="sexarr" />
                <InputText class="w-full m-1" v-model="passeger.nationality" placeholder="Гражданство"  />
                <Dropdown class="w-full m-1" v-model="passeger.doc" placeholder="Документ" :options="docarr"/>
                <InputMask class="w-full m-1" v-model="passeger.passport" v-if="passeger.doc != ''" placeholder="Серия/Номер паспорта" mask="9999/999-999"/>
            </div>            
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue';

let passeger = ref({
                name: null,
                surname: null,
                patronymic: null,
                bd: null,
                sex:'',
                nationality: null,
                doc: null,
                passport: null
            })
const sexarr = ['Мужской', 'Женский']
const docarr = ['Паспорт']

</script>

