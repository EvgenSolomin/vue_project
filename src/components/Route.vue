<template>
    <form @submit.prevent>
        <input v-model="pointA" type="text" placeholder="Откуда">
        <button @click="reverse" >=</button>
        <input v-model="pointB" type="text" placeholder="Куда">
    </form>
</template>

<script>
export default{
    data(){
        return{
            pointA:'',
            pointB:'', 
            rev:''
        }
    },
    methods:{
        reverse(){
            this.rev = this.pointA
            this.pointA = this.pointB
            this.pointB = this.rev
        }
    }
}
</script>

<style scoped>
*{
margin: 5px;
}
</style>

