<template>
    <div class=" flex flex-row justify-content-center" >
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Взрослый</span>
            <Quantity :passengers="passengers.adult" @creat="creat_adult_list" />
        </div>
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Детский </span>
            <Quantity :passengers="passengers.child" @creat="creat_child_list"/>
        </div>
    </div>
</template>

<script setup>
import {ref, inject, toRef, toRefs} from 'vue'
import Quantity from './Quantity.vue';

const passengers_list = toRef(inject('DATA_TO_p-list'))
const passengers = toRefs(inject("DATA_FROM_PASSENGERS"));
const data_passenger = {
    id: null,
    name: null,
    surname: null,
    patronymic: null,
    bd: null,
    sex:null,
    nationality: null,
    doc: null,
    passport: null,
    child:0
}
function creat_adult_list(){
    let p_length = passengers.adult.value + passengers.child.value
    if(passengers_list.value.length < p_length)
        passengers_list.value.push({...data_passenger})
    let arr_adult = passengers_list.value.filter((passenger) => passenger.child == 0)
    let arr_child = passengers_list.value.filter((passenger) => passenger.child != 0)
    if(passengers_list.value.length > p_length)
        arr_adult.pop()
    passengers_list.value=[...arr_adult, ...arr_child]   
    for(let i = 0; i < passengers_list.value.length; i++ )
        passengers_list.value[i].id = i
    console.log(passengers_list.value)
}
function creat_child_list(){
    let p_length = passengers.adult.value + passengers.child.value
    if(passengers_list.value.length < p_length){
        passengers_list.value.push({...data_passenger})
        passengers_list.value[passengers_list.value.length-1].child = 1
    }
    if(passengers_list.value.length > p_length)
        passengers_list.value.pop()
    console.log(passengers_list.value)
}
</script>