<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passengers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(false)" />
            {{ passengers }}
        <Button label="+" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(true)" />
    </div>
</template>

<script setup>
import {ref, inject, toRef} from 'vue'

const p_object = defineProps(['passengers'])
const passengers = p_object.passengers
const default_passengers = passengers.value

function raise(increase){
    increase ? passengers.value++ : passengers.value-- 
}



</script>
