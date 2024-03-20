<template>
        <div class="flex flex-row align-items-center m-1 ">
            <Calendar class="m-1 w-5" v-model="start" @select="printDate" />
            <Calendar class="m-1 w-5" v-show="check" v-model="start"/>
            <div class=" flex m-1 w-4  align-items-center">
                <input v-model="check" type="checkbox" />Обратно 
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            check: false
        };
    },
    setup() {
        const start = ref(new Date().toLocaleDateString());
        return {
            start
        };
    },
    mounted() {
        console.log(this.start); // 0
    }
}        
    

</script>

