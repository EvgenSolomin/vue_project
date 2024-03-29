<template>
        <div class="flex flex-row align-items-center m-1 " >
            <Calendar class="m-1 w-5" placeholder="Дата отправления" v-model="p_from"  :minDate="minDate"/>
            <Calendar class="m-1 w-5" placeholder="Дата возвращения" v-show="check" v-model="p_to" :minDate="minDate"/>
            <div class="flex justify-content-end flex-wrap" >
                <Button @click="one_way" icon="pi pi-arrow-right-arrow-left"/>
            </div>
            
        </div>
</template>

<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            check: false,
            p_from: null,
            p_to: null,
            minDate: new Date()
        };
    },
    methods:{
        one_way(){
            if(this.check){
                this.check = false
            }else{
                this.check = true
            }
        }
    }
}        
    

</script>

