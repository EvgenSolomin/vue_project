<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passengers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="minus()" />
            {{ passengers }}
        <Button label="+" :disabled="passengers == max_passengers" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="plus()" />
    </div>
</template>

<script setup>
import {ref, inject, toRef,toRefs} from 'vue'

const props  = defineProps(['passengers', 'thisChild'])
const passengers = toRef(props.passengers)
const thisChild = props.thisChild
const default_passengers = passengers.value
const max_passengers=10
const passengers_list = toRef(inject('DATA_TO_p-list'))
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

function plus(){
    passengers.value++
    passengers_list.value.push({...data_passenger})
    if(thisChild == 1)
        passengers_list.value[passengers_list.value.length-1].child = thisChild
    let arr_adult = passengers_list.value.filter((passenger) => passenger.child == 0)
    let arr_child = passengers_list.value.filter((passenger) => passenger.child == 1)
    passengers_list.value=[...arr_adult, ...arr_child]   
    for(let i = 0; i < passengers_list.value.length; i++ )
        passengers_list.value[i].id = i
    //console.log(passengers_list.value)
}

function minus(){
    passengers.value--
    let arr_adult = passengers_list.value.filter((passenger) => passenger.child == 0)
    let arr_child = passengers_list.value.filter((passenger) => passenger.child == 1)
    thisChild == 0 ? arr_adult.pop() : arr_child.pop()
    passengers_list.value=[...arr_adult, ...arr_child]   
    for(let i = 0; i < passengers_list.value.length; i++ )
        passengers_list.value[i].id = i
    //console.log(passengers_list.value)
}
</script>
