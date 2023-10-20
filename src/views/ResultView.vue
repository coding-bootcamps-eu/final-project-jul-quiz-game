<template>
  <div class="container">
    <div v-if="!seeDetails">
      <CongratsComponent></CongratsComponent>
      <button class="card" @click="resetGame">erneut versuchen</button>
      <button class="card" @click="toggleDetails">Details</button>
    </div>
    <div class="result-container" v-if="seeDetails">
      <h2>Dein Ergebnis</h2>
      <p>benötigte Zeit: {{ quizElapsedTime }} Sekunden</p>
      <h3>Überblick</h3>
      <div class="answer-container">
        <div
          class="answer-details"
          v-for="detail of quizDetails"
          :key="detail.id"
        >
          <h4>{{ detail.question }}</h4>
          <p>Deine Antworten: {{ detail.selectedAnswers }}</p>
          <div
            v-for="answerDetail of detail.answerDetails"
            :key="answerDetail.id"
          >
            <p :class="answerDetail.isValid ? 'valid' : 'invalid'">
              <span>{{ answerDetail.id }}:</span> {{ answerDetail.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import CongratsComponent from "@/components/CongratsComponent.vue";
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";
export default {
  components: {
    CongratsComponent,
  },
  data() {
    return {
      seeDetails: false,
    };
  },
  computed: {
    ...mapStores(useQuizStore),

    quizElapsedTime() {
      const { elapsedTime } = this.quizStore.Qresults;
      return elapsedTime;
    },
    quizDetails() {
      const { details } = this.quizStore.Qresults;
      return details;
    },
    quizResult() {
      const { result } = this.quizStore.Qresults;
      return result;
    },
  },
  created() {
    this.quizStore.getResults();
  },
  methods: {
    resetGame() {
      router.push("/");
    },
    toggleDetails() {
      this.seeDetails = !this.seeDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.valid {
  background-color: rgb(49, 103, 49);
}
.invalid {
  background-color: rgb(218, 90, 90);
}
</style>
