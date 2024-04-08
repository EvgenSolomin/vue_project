<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passagers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(false)" />
            {{ passengers }}
        <Button label="+" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(true)" />
    </div>
</template>

<script setup>
import {ref, inject, toRef} from 'vue'

const p_object = defineProps({
    passengers: Number
})


const passengers = p_object.passengers
//console.log(passengers.value)
let default_passagers = null;
if (passengers.value == 1)
    default_passagers = 1
if (passengers.value == 0)
    default_passagers = 0

function raise(increase){
    if(increase)
        this.passengers++
    else if (!increase && this.passengers > this.default_passagers)
        this.passengers--
}



</script>
