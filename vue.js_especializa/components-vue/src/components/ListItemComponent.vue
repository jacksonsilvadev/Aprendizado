<template>
  <div>
    <h2>{{ title }}</h2>

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
  methods: {
    callParent() {
      this.$emit("calledParent", "hi");
    }
  }
};
</script>

<style scoped>
</style>