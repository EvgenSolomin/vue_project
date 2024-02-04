<template>
    <form @submit.prevent class="quan">
        <button @click="minus">-</button>
        {{ passen }}
        <button @click="plus">+</button>
    </form>
</template>

<script>
export default{
    data(){
        return{
            passen: 0
        }
    },
    methods:{
        plus(){
            if(this.passen >= 0){
                this.passen ++
            }
        }, 
        minus(){
            if(this.passen > 0){
                this.passen --
            }
        }
    }
}
</script>

<style scoped>
button{
    width: 20px;
    height: 20px;
}
*{
    margin: auto;
}
.quan{
    display: flex;
}
</style>