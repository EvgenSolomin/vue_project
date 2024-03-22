<template>
    <div class="w-full flex flex-column p-1 " >
        <Route class="m-1 w-full border-round border-1 border-cyan-500" />
        <Passengers class="m-1 w-full border-round border-1 border-cyan-500" />
        <Dates class="m-1 w-full border-round border-1 border-cyan-500" />
        <Submit class="m-1 w-full " />
      </div>
  
  
</template>
  
  <script>
  import Route from './Route.vue'
  import Passengers from './Passengers.vue'
  import Dates from './Dates.vue'
  import Submit from './Submit.vue'
  
  export default{
    components:{
      Route, Passengers, Dates, Submit
  }
  }
  </script>
  
  