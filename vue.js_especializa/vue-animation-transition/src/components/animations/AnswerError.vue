<template>
    <div class="alert alert-danger text-center">
        <h1>{{ title }}</h1>
        <hr>
        <p>Erro na Resposta!</p>
          <button class="btn btn-danger" @click="nextQuestion">
               Proxima Pergunta
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'Erro!'
        }
    },
    methods: {
        nextQuestion(){
            this.$emit('changeMode')
        }
    },
}
</script>  

<style scoped>
    .error {
        border: 2px solid red; padding:10px
    }
</style>