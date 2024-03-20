<template >
        <div class="flex flex-row w-full">
            <InputText  class="w-6 m-1" v-model="pointA" type="text" placeholder="Откуда"/>
            <Button class="w-1 m-1" @click="reverse" icon="pi pi-arrows-h" />
            <InputText class="w-6 m-1" v-model="pointB" type="text" placeholder="Куда"/>
        </div> 
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

</style>

