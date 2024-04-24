<template>
    <div class=" flex flex-row justify-content-center" >
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Взрослый</span>
            <Quantity :passengers="passengers.adult" :thisChild="0" />
        </div>
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Детский </span>
            <Quantity :passengers="passengers.child" :thisChild="1"/>
        </div>
    </div>
</template>

<script setup>
import {ref, inject, toRef, toRefs} from 'vue'
import Quantity from './Quantity.vue';
const passengers = toRefs(inject("DATA_FROM_PASSENGERS"));
</script>