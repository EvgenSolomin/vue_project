<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passengers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(false)" />
            {{ passengers }}
        <Button label="+" :disabled="passengers == max_passengers" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(true)" />
    </div>
</template>

<script setup>
import {ref, inject, toRef,toRefs} from 'vue'

const props  = defineProps({
    passengers: {
        type:Number,
        required: true
    },
    thisChild:{
        type:Number,
        required: true
    }
})
const {passengers,thisChild}=toRefs(props)

const default_passengers = passengers.value
const max_passengers=10
const passengers_list = toRef(inject('DATA_TO_p-list'))
const { adult, child } = toRefs(inject("DATA_FROM_PASSENGERS"));
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

function raise(increase){
    increase ? passengers.value++ : passengers.value-- 
    if(passengers_list.value.length < (adult.value+child.value) && increase){
        for(let i = passengers_list.value.length; i < (adult.value+child.value); i++){
            passengers_list.value.push({...data_passenger})
            passengers_list.value[i].id = i
            passengers_list.value[i].child = thisChild.value
           
        }
    }
    if(passengers_list.value.length>=1 && adult.value>=1 && !increase){
        // for(let i = passengers_list.value.length; i > (adult.value+child.value); i--){
            // let arr1=passengers_list.value.filter(passenger=>passenger.child!==thisChild.value)//.pop()
            // let arr2=passengers_list.value.filter(passenger=>passenger.child==thisChild.value)
            // console.log(arr1)
            // console.log(arr2)
            // if (thisChild==1){
            //     arr2.pop()
            // }else{
            //     arr1.pop()
            // }
            // passengers_list.value={...arr1,...arr2}
            passengers_list.value.pop()
        // }
    }
}



</script>
