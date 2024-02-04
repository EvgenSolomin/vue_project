<template>
    <form>
       <div class="main">
            <span>Взрослый</span>
            <Quantity/> 
        </div>
        <div class="main">
            <span>Детский</span>
            <Quantity/>
        </div> 
    </form>
    
    
</template>
<script>
import Quantity from './Quantity.vue'

export default{
    components:{Quantity}
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 5px;
    
}
.main{
    margin: auto;
    display: flexbox;
    justify-content: center;
}
</style>