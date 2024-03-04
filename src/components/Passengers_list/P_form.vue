<template>
    <h2>Список пассажиров</h2>
    <div class="p_form">
        <InputText v-model="surname" placeholder="Фамилия" />
        <InputText v-model="name" placeholder="Имя"/>
        <InputText v-model="patronymic" placeholder="Отчество"/>
        <Calendar class="call" v-model="bd" showIcon :showOnFocus="false" iconDisplay="input"/>
        <Dropdown placeholder="Пол" :options="sexarr" />
        <Dropdown placeholder="Гражданство"  />
        <Dropdown placeholder="Документ"  />
        <InputMask placeholder="Серия" mask="9999"/>
        <InputMask placeholder="Номер паспорта" mask="999-999"/>
        <Button label="Купить"></Button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            surname: '',
            patronymic: '',
            bd: '',
            sexarr: ['Мужской', 'Женский'],
            sex:''
        };
    }
}
</script>

<style scoped>
*{
    display: flexbox;
    height: 30px;
}
.p_form{
    display: inline;
    height: 50px;
    margin: 5px;
    padding: 5px;
    border: 2px solid black;
}
</style>