<template>
    <div class="alert alert-success text-center">
        <h1>{{ title }}</h1>
        <hr>
        <p>Sucesso na Resposta!</p>

        <button class="btn btn-success" @click="nextQuestion">
               Proxima Pergunta
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'Sucesso!'
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
    .success {
        border: 2px solid green; padding:10px
    }
</style>