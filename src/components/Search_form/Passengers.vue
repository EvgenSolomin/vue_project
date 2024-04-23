<template>
    <div class=" flex flex-row justify-content-center" >
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Взрослый</span>
            <Quantity :passengers="passengers.adult" @get-passengers="creat_passengers_list" />
        </div>
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Детский </span>
            <Quantity :passengers="passengers.child" @get-passengers="creat_child_list"/>
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
function creat_passengers_list(){
    let p_length = passengers.adult.value + passengers.child.value
    console.log(passengers_list.length + " "+p_length)
    let arr_adult = passengers_list.filter((passenger) => passenger.child == 0)
    let arr_child = passengers_list.filter((passenger) => passenger.child != 0)
    if(passengers_list.value.length < p_length){
        arr_adult.push({...data_passenger})
    }
    console.log(arr_adult)
    console.log(arr_child)
    // if(passengers_list.value.length > p_length && passengers.adult.value > 1){
    //     arr_adult.pop()
    // }
    passengers_list.value={...arr_adult, ...arr_child}
    for(let i = 0; i < passengers_list.value.length; i++ ){
        passengers_list.value.id = i
    }
    console.log(passengers_list.value)
}
function creat_child_list(){
    let p_length = passengers.adult.value + passengers.child.value
    console.log(passengers_list.value.length + " "+p_length)
    if(passengers_list.value.length < p_length){
        passengers_list.value.push({...data_passenger})
        passengers_list.value[passengers_list.value.length-1].child = 1
    }
    if(passengers_list.value.length > p_length && passengers.adult.value > 1){
        passengers_list.value.pop()
    }
    for(let i = 0; i < passengers_list.value.length; i++ ){
        passengers_list.value.id = i
    }
    console.log(passengers_list.value)
}

// 
    // 
    // for(let i = passengers_list.value.length; i < p_length; i++){}
    // console.log('passenger_list: '+passengers_list.value)
    // arr_adult = 
    // arr_child = 
    // {
    //     thisChild == 0 ? arr_adult.pop() : arr_child.pop()
    // }
    // 
    
    // 

    

// for(let i = passengers_list.value.length; i > (adult.value+child.value); i--){
            // =passengers_list.value.filter(passenger=>passenger.child!==thisChild.value)//.pop()
            // let arr2=passengers_list.value.filter(passenger=>passenger.child==thisChild.value)
            // thisChild == 0 ? arr1.pop() : arr2.pop()
            // passengers_list.value = [arr1, arr2]
            // console.log('arr1: '+arr1.value)
            // console.log('arr2: '+arr2.value)
            // 
            // if (thisChild==1){
            //     arr2.pop()
            // }else{
            //     arr1.pop()
            // }

            // 
            // passengers_list.value.pop()
        // }

</script>