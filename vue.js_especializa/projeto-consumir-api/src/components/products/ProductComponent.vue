<template>
  <div>
    <h1>{{ title }}</h1>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th width="200">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <th v-text="product.id"></th>
          <th v-text="product.name"></th>
          <th v-text="product.description"></th>
          <th>
            <a href="#" class="btn btn-info">Editar</a>
            <a href="#" class="btn btn-danger">Deletar</a>
          </th>
        </tr>
      </tbody>
    </table>

  <ul class="pagination">
    <li v-if="products.current_page - 1 >= 1" class="page-item">
        <a href="#" class="page-link" @click.prevent="pagination(products.current_page - 1)"> Previous Page </a>
    </li>
    <li v-if="products.current_page + 1 == products.last_page" class="page-item">
        <a href="#" class="page-link" @click.prevent="pagination(products.current_page + 1)"> Next Page </a>
    </li>
  </ul>

    <div v-if="preloader">
      <img src="../../assets/preloader.gif" alt="preloader" class="preloader">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Product Page do Site",
      products: {
        current_page: 1,
        last_page: 1
      },
      preloader: false
    };
  },
  methods: {
    getProducts () {
      this.preloader=true
      this.$http.get(`http://laravel55-weservice.local/api/v1/products?page=${this.products.current_page}`)
      .then(response => {
        this.products = response.body
      this.preloader = false

      }), error => {
        console.log(error)
      }
    },
    pagination (pageNumber) {
      this.products.current_page = pageNumber
     
     this.getProducts()
    }
  },
  created(){

    this.getProducts()
  }
};
</script>

<style scoped>
</style>