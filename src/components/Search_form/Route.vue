<template>
        <InputText v-model="pointA" type="text" placeholder="Откуда"/>
        <Button @click="reverse" icon="pi pi-arrows-h" 
        :pt="{ 
            root: { class: 'bg-indigo-600 border-indigo-600' } 
        }"></Button>
        <InputText v-model="pointB" type="text" placeholder="Куда"/>
</template>

<script>

export default{
    data() {
        return {
            pointA: '',
            pointB: '',
            rev: ''
        };
    },
    methods: {
        reverse() {
            this.rev = this.pointA;
            this.pointA = this.pointB;
            this.pointB = this.rev;
        }
    }
}
</script>

<style scoped>
button{
    width: 30px;
    height: 30px;
    margin: 5px;
}
*{
    display: flex;
    height: 30px;
}
</style>

