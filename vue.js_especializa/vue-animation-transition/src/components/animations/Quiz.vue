<template>
  <div class="container">
    <h2 v-text="title"></h2>

    <!-- <app-question ></app-question> -->

 <div class="col">
    <transition name="effect" mode="out-in">
      <component @changeMode="changeMode" :is="mode"></component>
  
  </transition>

 </div>
  </div>
</template>

<script>
import Question from "./Question";
import AnswerSuccess from "./AnswerSuccess";
import AnswerError from "./AnswerError";

export default {
  data() {
    return {
      title: "Quiz",
      mode: 'app-question',
      
    };
  },
  components: {
    "app-question": Question,
    AnswerSuccess,
    AnswerError
  }, methods: {
    changeMode(mode = 'app-question'){
      this.mode = mode
    }
  },
};
</script>

<style scoped>
.effect-leave-active {
  animation: effect-out 1.5s
}
.effect-enter-active {
  animation: effect-in 1.5s
}

@keyframes effect-out {
  from {
    transform: rotateY(0deg)
  }
  to{
    transform: rotateY(90deg)
  }
}
@keyframes effect-in {
  from {
     transform: rotateY(90deg)
  }
  to {
     transform: rotateY(0deg)
  }
}
</style>