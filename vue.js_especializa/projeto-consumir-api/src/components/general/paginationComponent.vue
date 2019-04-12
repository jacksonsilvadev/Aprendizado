<template>
  <div class="row justify-content-center">
    <ul class="pagination">
      <!-- Pega o valor da current page e diminui para um retornando uma página -->
      <li
        v-if="pagination.current_page > 0 && preloader == false"
        :class="['page-item',{'disabled' : pagination.current_page == 1}]"
      >
        <a
          href="#"
          class="page-link"
          aria-label="Previous"
          @click.prevent="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>

      <!-- Pega o valor do current page mostrando para o usuário todas as páginas -->
      <li
        v-if="pagination.last_page > 1"
        v-for="(page,index) in pagesNumber"
        :class="['page-item', {'active': page == pagination.current_page}]"
        :key="index"
      >
        <a href="#" :class="['page-link']" v-text="page" @click.prevent="changePage(page)"></a>
      </li>

      <li v-if="pagination.current_page < pagination.last_page">
        <a
          href="#"
          :class="['page-link']"
          aria-label="Next"
          @click.prevent="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 4
    },
    preloader: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) return [];

      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }

      let to = from + this.offset;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      let pagesArray = [];

      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },
  methods: {
    changePage(page) {
      this.$emit("pagination", page);
    }
  }
};
</script>