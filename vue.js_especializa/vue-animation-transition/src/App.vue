<template>
  <div id="app">
    <quiz></quiz>
  </div>
</template>

<script>
import Quiz from "./components/animations/Quiz";
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  components: {
    Quiz
  },
 
};
</script>

<style>
.teste-enter-active,
.teste-leave-active {
  transition: opacity 1s;
}

.teste-enter,
.teste-leave-to {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
