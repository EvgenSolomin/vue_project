<template>
    <Card class="card">
        <template #title>
            <h4>Список пассажиров</h4>
        </template>
        <template #content >
            <div class="null">
                Список пассажиров пуст
            </div>
            <div class="flex flex-column w-2 p-1">
                <InputText v-model="passeger.name" placeholder="Фамилия" />
                <InputText v-model="passeger.surname" placeholder="Имя"/>
                <InputText v-model="passeger.patronymic" placeholder="Отчество"/>
                <Calendar v-model="passeger.bd" showIcon  placeholder="Дата рождения"/>
                <Dropdown v-model="passeger.sex" placeholder="Пол" :options="sexarr" />
                <InputText v-model="passeger.nationality" placeholder="Гражданство"  />
                <Dropdown v-model="passeger.doc" placeholder="Документ" :options="docarr"/>
                <InputMask v-model="passeger.passport" v-if="passeger.doc != ''" placeholder="Серия/Номер паспорта" mask="9999/999-999"/>
                <Button label="Добавить" @click="creatPassager"/>
            </div>            
        </template>
    </Card>
</template>

<script>
export default {
    data(){
        return{
            passeger:{
                name:'',
                surname:'',
                patronymic:'',
                bd: '',
                sex:'',
                nationality:'',
                doc:'',
                passport:''
            },
            sexarr: ['Мужской', 'Женский'],
            docarr: ['Паспорт'],
            passegers:[]
        };
    },
    methods:{
        creatPassager(){
            this.passegers.push(this.passeger)
        }
    }

}
</script>

