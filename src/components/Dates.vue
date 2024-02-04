<template>
    <form>
        <input type="date">
        <input v-if="check" type="date" >
        <form>
           <input v-model="check" type="checkbox">Туда-обратно 
        </form>
    </form>
</template>

<script>
export default{
    data(){
        return{
            check: false
        }
    }
}
</script>

<style>
*{
    margin: 5px;
}
</style>

