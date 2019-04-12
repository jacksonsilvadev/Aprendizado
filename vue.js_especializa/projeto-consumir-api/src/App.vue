<template>
  <div id="app" class="container text-center">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>

</style>
