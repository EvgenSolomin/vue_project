<template>
    <div class=" flex flex-row justify-content-center" >
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Взрослый</span>
            <Quantity :passengers="passengers" /> 
        </div>
        <div class="flex flex-row justify-content-center align-items-center m-1">
            <span>Детский</span>
            <Quantity :passengers="child"/>
        </div>
    </div>
</template>
<script>
import Quantity from './Quantity.vue'

export default{
    components:{Quantity},
    data(){
        return{
            passengers: 1,
            child: 0
        }
    }
}
</script>