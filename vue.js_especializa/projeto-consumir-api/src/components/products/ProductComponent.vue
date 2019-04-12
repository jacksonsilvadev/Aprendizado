<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>

    <div class="row">
      <div class="col-12">
        <div v-if="confirmDelete" class="alert alert-danger text-center">
          <h2>Deseja realmente deletar?</h2>
      <hr>
    <button @click.prevent="deleteProduct(idProductDelete)" class="btn btn-danger"> Deletar Agora </button>
        </div>
  <search-product-component @filter="filtered"></search-product-component>
        <router-link class="btn btn-primary float-right mb-3" to="/products/create">Add product</router-link>
      </div>
    </div>

    <table class="table table-striped table-hover table-light">
      <thead class="thead-dark">
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
            <router-link class="btn btn-info" :to="{name: 'product.edit', params: {
              id: product.id
            }}">Editar</router-link>
            <a href="#" @click.prevent="confirmDeleteProduct(product.id)" class="btn btn-danger">Deletar</a>
          </th>
        </tr>
      </tbody>
    </table>

    <pagination-component @pagination="pagination" :preloader="preloader" :pagination="products"></pagination-component>
    
    
    <!-- <ul class="pagination">
      <li v-if="products.current_page - 1 >= 1" class="page-item">
        <a
          href="#"
          class="page-link"
          @click.prevent="pagination(products.current_page - 1)"
        >Previous Page</a>
      </li>
      <li v-if="products.current_page + 1 < products.last_page" class="page-item">
        <a
          href="#"
          class="page-link"
          @click.prevent="pagination(products.current_page + 1)"
        >Next Page</a>
      </li>
    </ul>-->

  <preloader-component :preloader="preloader"></preloader-component>
    
  </div>
</template>

<script>
import paginationComponent from "../general/paginationComponent";
import SearchProductComponent from "./SearchProductComponent";
import PreloaderComponent from "../general/PreloaderComponent";

export default {
  data() {
    return {
      title: "Product Page do Site",
      products: {
        current_page: 1,
        last_page: 1
      },
      preloader: false,
      confirmDelete: false,
      idProductDelete: 0,
      filter:''
    };
  },
  components: {
    paginationComponent,
    PreloaderComponent,
    SearchProductComponent
  },
  methods: {
    getProducts() {
      this.preloader = true;
      this.$http
        .get(
          `http://laravel55-weservice.local/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`
        )
        .then(response => {
          this.idProductDelete = 0
          this.confirmDelete = false,
          this.products = response.body;
          this.preloader = false;
        }),
        error => {
          console.log(error);
        };
    },
    confirmDeleteProduct(id) {
      this.idProductDelete = id
      this.confirmDelete = true
    },
    deleteProduct(id){
       this.preloader = true;

      this.$http
        .delete(
          `http://laravel55-weservice.local/api/v1/products/${
           id
          }`
        )
        .then(response => {
          
          this.getProducts()
          this.preloader = false;
        }),
        error => {
          console.log(error);
        };
    },
    filtered(filter){
      this.filter = filter

      this.getProducts()
    },
    pagination(pageNumber) {
      this.products.current_page = pageNumber;

      this.getProducts();
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
</style>