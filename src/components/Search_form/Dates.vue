<template>
    <form class="form">
        <Calendar v-model="start" @select="printDate" />
        <Calendar v-show="check" v-model="start"/>
        <div class="check">
            <input v-model="check" type="checkbox" />Туда-обратно 
        </div>
    </form>
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

<style scoped>
*{
    display:flex;
}
</style>

