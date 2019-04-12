<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>

    <form @submit.prevent="saveData">
      <div class="form-group" :class="{'has-danger' : errorValidation.name}">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          v-model="product.name"
          name="name"
          placeholder="Write your name"
        >
        <div v-if="errorValidation.name">
          <p v-for="erro in errorValidation.name" class="alert alert-danger" v-text="erro"></p>
        </div>
      </div>

      <div class="form-group" :class="{'has-danger' : errorValidation.description}">
        <label for>Description</label>
        <input
          type="text"
          class="form-control"
          v-model="product.description"
          name="description"
          placeholder="Write your description"
        >
        <div v-if="errorValidation.description">
          <p v-for="erro in errorValidation.description" class="alert alert-danger" v-text="erro"></p>
        </div>
      </div>

      <div class="form-group text-center">
        <button type="submit" class="btn btn-success">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Create your Product",
      product: {
        name: "",
        description: ""
      },
      errorValidation: []
    };
  },
  methods: {
    saveData() {
      this.$http
        .post("http://laravel55-weservice.local/api/v1/products", this.product)
        .then(
          res => {
            this.$router.push("/products");
            this.product = {
              name: "",
              description: ""
            };
          },
          err => {
            this.errorValidation = err.body.errors;
          }
        );
    }
  }
};
</script>

<style scoped>
.has-danger input {
  color: red;
  border: red 1px solid;
}
</style>