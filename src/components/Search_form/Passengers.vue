<template>
    <form>
        <div class=" flex flex-row justify-content-center" >
            <div class="flex flex-column justify-content-center align-items-center m-1">
                <span>Взрослый</span>
                <Quantity /> 
            </div>
            <div class="flex flex-column justify-content-center align-items-center m-1">
                <span>Детский</span>
                <Quantity/>
            </div>
        </div>
        
    </form>
</template>
<script>
import Quantity from './Quantity.vue'

export default{
    components:{Quantity}
}
</script>