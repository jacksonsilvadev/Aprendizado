<template>
  <div>
    <h1 v-text="title"></h1>

    <form @submit.prevent="sendCep">
      <input type="text" v-model="cep" placeholder="Informe o CEP:">
      <button type="submit">Buscar Cep</button>
    </form>

    <p v-if="completed">Buscando CEP...</p>

    <p v-if="error != ''" v-text="error"></p>

    <div v-if="address">
      <p>Bairro: {{address.bairro}}</p>
      <p>Cidade: {{address.cidade}}</p>
      <p>Rua: {{address.logradouro}}</p>
      <p>Estado: {{address.estado_info.nome}}</p>
      <p>Cep: {{address.cep}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Busca Cep com Vue JS",
      cep: "",
      address: null,
      completed: false,
      error: false
    };
  },
  methods: {
    sendCep() {
      this.completed = true;
      this.address = "";

      this.$http
        .get(`https://api.postmon.com.br/v1/cep/${this.cep}`)
        .then(res => {
          this.address = res.body;
          this.cep = "";
          this.error = "";
        })
        .catch(err => {
          this.error = "Cep Errado!";
        })
        .finally(() => {
          this.completed = false;
        });
    }
  }
};
</script>

<style scoped>
</style>