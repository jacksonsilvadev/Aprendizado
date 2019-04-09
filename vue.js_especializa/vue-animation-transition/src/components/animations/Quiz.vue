<template>
  <div>
    <h2 v-text="title"></h2>

    <app-question></app-question>
  </div>
</template>

<script>
import Question from "./Question";

export default {
  data() {
    return {
      title: "Quiz"
    };
  },
  components: {
    "app-question": Question
  }
};
</script>

<style scoped>
</style>