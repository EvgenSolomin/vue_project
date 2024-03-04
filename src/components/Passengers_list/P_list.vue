<template>
    <div class="form">
        <P_form/>
    </div>
</template>

<script>
import P_form from './P_form.vue'
export default{
    components:{ P_form }
}

</script>

<style scoped>
.form{
    display: flex;
    justify-content: left;
    background-color:rgb(228, 241, 255);
    height: 300px;
}
</style>