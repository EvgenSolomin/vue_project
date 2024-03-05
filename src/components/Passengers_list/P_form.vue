<template>
    <div class="p_form">
        <InputText v-model="passeger[0]" placeholder="Фамилия" />
        <InputText v-model="passeger[1]" placeholder="Имя"/>
        <InputText v-model="passeger[2]" placeholder="Отчество"/>
        <Calendar v-model="bd" showIcon  placeholder="Дата рождения"/>
        <Dropdown v-model="sex" placeholder="Пол" :options="sexarr" />
        <InputText placeholder="Гражданство"  />
        <Dropdown v-model="doc" placeholder="Документ" :options="docarr"/>
        <InputMask class="pasport" v-if="doc != ''" placeholder="Серия/Номер паспорта" mask="9999/999-999"/>
        <Button label="Купить"></Button> 
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            passeger:[],
            bd: '',
            sex:'',
            doc:'',
            sexarr: ['Мужской', 'Женский'],
            docarr: ['Паспорт']
            
        };
    }
}
</script>

<style scoped>
*{
    display: flex;
    margin: 5px;
}
.p_form{
    flex-direction: column;
    width: 250px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>