<template>
    <div class="form">
        <h2>Список пассажиров</h2>
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
    flex-direction: column;
    justify-content: left;
    background-color:rgb(228, 241, 255);
}
</style>