<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button :disabled="passengers == default_passagers" label="-" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(false)" />
            {{ passengers }}
        <Button label="+" class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="raise(true)" />
    </div>
</template>

<script setup>
import {ref} from 'vue'

const p_type = defineProps({
    passengers_type: String
})
let default_passagers = null;

if(p_type.passengers_type == "adult")
    default_passagers = 1;
else
    default_passagers = 0;

const passengers = ref(default_passagers)

function raise(increase){
    if(increase)
        this.passengers++
    else if (!increase && this.passengers > this.default_passagers)
        this.passengers--
}



</script>
