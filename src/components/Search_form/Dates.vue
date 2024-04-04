<template>
        <div class="flex flex-row align-items-center m-1 " >
            <Calendar class="m-1 w-5" placeholder="Дата отправления" v-model="arivalDate"  :minDate="minDate"/>
            <Calendar class="m-1 w-5" placeholder="Дата возвращения" v-show="check" v-model="p_to" :minDate="minDate"/>
            <div class="flex justify-content-end flex-wrap" >
                <Button @click="one_way" icon="pi pi-arrow-right-arrow-left"/>
            </div>
            
        </div>
</template>

<script setup>
import { ref, onMounted,inject,toRef,toRefs } from 'vue'
const {arivalDate,searchTrips}  = toRefs(inject('DATA_FROM_FLF'))

const check = false
const p_from = null
const p_to = null
const minDate = new Date()

const one_way=()=>{
    if(this.check){
        this.check = false
    }else{
        this.check = true
    }
}

</script>

