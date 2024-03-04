<template>
    <form class="form">
        <Calendar v-model="start" @select="printDate" />
        <Calendar v-show="check" v-model="end"/>
        <div class="check">
            <input v-model="check" type="checkbox" />Туда-обратно 
        </div>
    </form>
</template>

<script>
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue'
export default {
    data() {
        return {
            check: false
        };
    },
    setup() {
        const start = ref(new Date().toLocaleDateString('en-ca'));
        return {
            start
        };
    },
    mounted() {
        console.log(this.start); // 0
    },
    components: { Checkbox }
}        
    

</script>

<style scoped>
*{
    display:flex;
}
</style>

