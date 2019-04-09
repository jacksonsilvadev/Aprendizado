<template>
  <div>
    <h2>{{ title }}</h2>

    <p>Parametro: {{id}}</p>
    <p>Props: {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      title: "Lista de tarefas"
    };
  }
};
</script>

<style scoped>
</style>