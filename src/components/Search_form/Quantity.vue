<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passengers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(false), event('plus')" />
            {{ passengers }}
        <Button label="+" :disabled="passengers == max_passengers" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(true), event('plus')" />
    </div>
</template>

<script setup>
import {ref, inject, toRef,toRefs} from 'vue'

const props  = defineProps(['passengers'])  
const event = defineEmits(['plus'])
const passengers = toRef(props.passengers)
const default_passengers = passengers.value
const max_passengers=10

function raise(increase){
    increase ? passengers.value++ : passengers.value-- 
}
</script>
