<template>
    <div>
        <P_form/>
    </div>
</template>

<script setup>
import P_form from './P_form.vue'
import {ref, inject, toRef, toRefs} from 'vue'

const {adult, child} = toRefs(inject('DATA_FROM_PASSENGERS'))
</script>
