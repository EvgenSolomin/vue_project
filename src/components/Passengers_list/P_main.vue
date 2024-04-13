<template>
    <div v-for="i in adult.value + child.value">
        <P_form/>
    </div>
</template>

<script setup>
import P_form from './P_form.vue'
import {ref, inject, toRef, toRefs} from 'vue'

const {adult, child} = toRefs(inject('PASSENGERS'))
</script>
