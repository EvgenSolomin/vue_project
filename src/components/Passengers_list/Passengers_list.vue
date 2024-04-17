<template>
    <div v-if="show_form">
        <Card class="bg-cyan-100">
            <template #title>Данные пассажиров: </template>
            <template #content>
                <div>
                    <P_form/>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import P_form from './P_form.vue'
import {ref, inject, toRef, toRefs} from 'vue'

const adult = toRef(inject('DATA_FROM_PASSENGERS'))
const show_form = toRef(inject('DATA_TO_FL'))
</script>
