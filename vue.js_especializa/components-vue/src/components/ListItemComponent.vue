<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" name="name" id="name" v-model="task" placeholder="Task">
    <button @click="callParent">Chamar Pai</button>

    <div>
      <p v-for="(item, index) in items" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
      default: ""
    },
    items: {
      required: true,
      type: Array,
      default: []
    }
  },
  data() {
    return {
      taks: ""
    };
  },
  methods: {
    callParent() {
      this.$emit("calledParent", this.task);
    }
  }
};
</script>

<style scoped>
</style>