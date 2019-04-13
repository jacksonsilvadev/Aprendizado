<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/tasks">Tasks ({{ totalTasksCompleted }} / {{ totalTasks }})</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    totalTasksCompleted () {
      return this.$store.getters.taskCompleted.length
    },
    totalTasks () {
      return this.$store.getters.sortedTasks.length
    }
  }
}
</script>

<style scoped>

</style>
