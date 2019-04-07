<template>
  <div id="app" class="comp">
   
<teste-component></teste-component>
<task-component></task-component>

  </div>
</template>

<script>
import TesteComponent from './components/TesteComponent'
import TaskComponent from './components/TaskComponent'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Curso de Vue JS'
    }
  },
  components:{
    TesteComponent,
    TaskComponent,
  }
}
</script>

<style>
.comp {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
  text-align: center
}
</style>
