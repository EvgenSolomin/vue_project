<template>
    <div class=" flex flex-row justify-content-center" >
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Взрослый</span>
            <Quantity :passengers_type="passengers_type.adult"/>
        </div>
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Детский</span>
            <Quantity :passengers_type="passengers_type.child"/>
        </div>
    </div>
</template>
<script setup>
import {ref, provide, toRefs} from 'vue'
import Quantity from './Quantity.vue';
const passengers_type = {
    adult: "adult",
    child: "child"
} 
</script>