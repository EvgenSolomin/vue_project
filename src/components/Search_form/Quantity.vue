<template>
    <div class="flex justify-content-center align-items-center m-1">
        <Button class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="minus">-</Button>
        {{ p }}
        <Button class="flex justify-content-center m-1" style="height: 30px; width: 30px" @click="plus">+</Button>
    </div>
</template>

<script>
export default{
    props:{
        passengers: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            p: this.passengers
        }
    },
    methods:{
        plus(){
            if(this.p >= 0){
                return this.p ++
            };
        }, 
        minus(){
            if(this.p > this.passengers){
                return this.p --
            };
        }
    } 
}
</script>
