<template>
  <Search_form/>
  <Passengers_list/>
</template>
<script>
import Search_form from './components/Search_form/Search_form.vue';
import Passengers_list from './components/Passengers_list/P_list.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'
export default{
    components:{
      Search_form, Passengers_list, Flight_list
    }
  }

</script>
<style scoped>
*{
  display: flex;
  justify-content: center;
  margin: 5px;
}
</style>