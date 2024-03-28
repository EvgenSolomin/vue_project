<template>
  <div class="content m-2">
    <div class="grid">
      <div class="sm:col-12 md:col-12 lg:col-4 xl:col-4" >
        <Card class="bg-cyan-100">
          <template #title>Bilet-check.ru <br> билеты на автобус</template>
          <template #content >
            <div class="flex h-27rem align-items-center">
              <Search_form />
            </div>
            
          </template>
        </Card>
      </div>
      <div class="sm:col-12 md:col-12 lg:col-8 xl:col-8">
        <Card class="bg-cyan-100">
          <template #title>Найдено рейсов: </template>
          <template #content>
            <Flight_list/>
          </template>
        </Card>
      </div>
    </div>
    <div class="grid" >
      <div class="col-12 ">
        <Card class="bg-cyan-100">
          <template #title>Данные пассажиров: </template>
          <template #content>
            <Passengers_list/>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Search_form from './components/Search_form/Search_form.vue';
import Passengers_list from './components/Passengers_list/P_main.vue'
import Flight_list from './components/Flight_list/Flight_list_form.vue'
export default{
    components:{
      Search_form, Passengers_list, Flight_list
    },
    date(){
      return{
        bull: true
      }
    }
  }
</script>

<style scoped>

</style>