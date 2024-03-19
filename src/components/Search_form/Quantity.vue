<template>
    <form @submit.prevent>
        <div class="flex justify-content-center align-items-center m-1">
            <Button class="m-1 " @click="minus">-</Button>
            {{ passen }}
            <Button class="m-1" @click="plus">+</Button>
        </div>
        
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
