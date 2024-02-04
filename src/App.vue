<template>
  <header>
    <h1>Куда едем?</h1>
  </header>

  <main>
    <Route/>
    <Passengers/>
    <Dates/>
    <Submit/>
  </main>

  <footer>
    tel: +7(800)555-35-35
  </footer>
  
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
  display: inline-flex;
  margin: auto;
  padding: auto;
}
template{
  display: block;
}
main{
  position: relative;
  top: auto;
  border: 2px solid red;
  height: 70px;
}
footer{
  position: relative;
  top: 500px
}

</style>