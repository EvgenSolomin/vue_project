<template>
    <form class="form">
       <div class="main">
            <span>Взрослый</span>
            <Quantity/> 
        </div>
        <div class="main">
            <span>Детский+</span>
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
    display: flex;
}
.main{
    flex-direction: column;
    align-items: center;
}
</style>