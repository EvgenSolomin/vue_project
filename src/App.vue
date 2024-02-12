<template>
  <main>
    <div class="m">
      <Route class="c"/>
      <Passengers class="c"/>
      <Dates class="c"/>
      <Submit class="c"/>
    </div>
  </main>
</template>

<script>
import Route from './components/Route.vue'
import Passengers from './components/Passengers.vue'
import Dates from './components/Dates.vue'
import Submit from './components/Submit.vue'

export default{
  components:{
    Route, Passengers, Dates, Submit
}
}
</script>

<style scoped>
*{
  display: flex;
}
.c{
  background-color:rgb(228, 241, 255);
  height: 100px;
  margin: 2px;
  padding: 7px;
  align-items: center;
}
main{
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>