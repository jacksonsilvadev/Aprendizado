<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>

    <form @submit.prevent="editData">
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
        <button type="submit" class="btn btn-success">Editar</button>
      </div>
    </form>
    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PreloaderComponent from "../general/PreloaderComponent";

export default {
    props: {
        id: {
            required: true,
            default: '',
        }
    },
  data() {
    return {
      title: "Edit your Product",
      product: {
        name: "",
        description: ""
      },
      errorValidation: [],
      preloader: false
    };
  },
  components: {
    PreloaderComponent
  },
  created() {
     this.getProduct()
  },
  methods: {
      getProduct () {
            this.preloader = true
            this.$http.get(`http://laravel55-weservice.local/api/v1/products/${this.id}`)
            .then(
          res => {

              this.product.name = res.body.name
              this.product.description = res.body.description
              
          },
          err => {
            console.log(err)
          })
        .finally(() => {
           this.preloader = false
        });
      
      },
    editData() {
      this.preloader = true
      this.$http
        .put(`http://laravel55-weservice.local/api/v1/products/${this.id}`, this.product)
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
            console.log(err)
          })
        .finally(() => {
           this.preloader = false
        });
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