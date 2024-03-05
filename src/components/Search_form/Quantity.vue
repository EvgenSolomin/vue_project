<template>
    <form @submit.prevent class="quan">
        <Button @click="minus">-</Button>
        {{ passen }}
        <Button @click="plus">+</Button>
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
    margin: 5px;
}
form{
    display: flex;
    align-items: center;
}
</style>