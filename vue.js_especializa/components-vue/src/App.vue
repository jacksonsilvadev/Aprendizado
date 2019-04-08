<template>
  <div id="app">
    <img src="./assets/logo.png">

    <task-list :items="items" :call="teste"></task-list>
    <list-item-component
      @calledParent="answerSon"
      :title="'Listagem de Algo'"
      :items="['Levantar','Fazer café','Comer','Treinae']"
    ></list-item-component>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
import ListItemComponent from "./components/ListItemComponent";

export default {
  name: "app",
  data() {
    return {
      items: ["Lavar", "Passar", "Cozinhar"]
    };
  },
  methods: {
    teste() {
      console.log("%c Top isso mano", "color: yellow");
    },
    answerSon(value) {
      alert(value);
    }
  },
  components: {
    TaskList,
    ListItemComponent
  }
};
</script>

<style>
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
