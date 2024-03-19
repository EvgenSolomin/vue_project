<template>
  <Card class="w-full">
    <template #content>
      <div class="flex flex-column" >
        <Route class="m-1 w-full" />
        <Passengers class="m-1 w-full" />
        <Dates class="m-1 w-full" />
        <Submit class="m-1 w-full" />
      </div>
    </template>
    
  </Card>
  
  
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
  
  