<template>
  <div class="card">
    <div class="card-header"><h2 v-text="question"></h2></div>
<div class="card-body">
    <form @submit.prevent="checkResult" class="form form-inline">
      <input type="text" v-model="reply" class="form-control" placeholder="Resposta:">
      <button type="submit" class="btn btn-primary">Responder</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "Gerando pergunta ...",
      result: 0,
      reply: ''
    };
  },
  created() {
    this.generateQuestion ()
  },
  methods: {
    generateQuestion () {
      let numberOne = this.randomNumber(1, 100)
      let numberTwo = this.randomNumber(1, 100) 
      this.result = numberOne + numberTwo

      this.question = `Qual é o resultado da soma entre ${numberOne} + ${numberTwo}?`
    },
    randomNumber (min, max){
      return Math.round(Math.random()* (max - min)) + min
    },
    checkResult() {
      let mode = ''

      this.reply == this.result ? mode = 'answer-success' : mode = 'answer-error'

      this.$emit('changeMode', mode)
      this.reply = ''
      this.generateQuestion()
    }
  }
  };
</script>

<style scoped>
.default {
        border: 2px solid green; padding:10px
    }
</style>