<template>
    <div>
        <form class="form form-inline" @submit.prevent="filterProduct">
            <input type="text" placeholder="Procurar?" v-model="filter" class="form-control">
            <button class="btn ml-3 btn-warning"> Pesquisar </button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            filter: ''
        }
    },
    methods: {
        filterProduct() {

            this.$emit('filter', this.filter)
        }
    }
}
</script>
<style scoped>
    
</style>