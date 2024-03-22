<template>
  <div class="grid justify-content-center align-items-center w-full">
    <InputText class="col-5 m-1" v-model="pointA" type="text" placeholder="Откуда" />
    <Button
      class="flex justify-content-center m-1"
      style="height: 30px; width: 30px"
      @click="reverse"
      icon="pi pi-arrows-h"
    />
    <InputText class="col-5 m-1" v-model="pointB" type="text" placeholder="Куда" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointA: "",
      pointB: "",
      rev: "",
    };
  },
  methods: {
    reverse() {
      this.rev = this.pointA;
      this.pointA = this.pointB;
      this.pointB = this.rev;
    },
  },
};
</script>

<style scoped></style>
