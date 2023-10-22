<template>
  <div class="container">
    <div v-if="!seeDetails">
      <CongratsComponent></CongratsComponent>
      <button class="btn" @click="resetGame">erneut versuchen</button>
      <button class="btn" @click="toggleDetails">Details</button>
    </div>
    <div class="result-container" v-if="seeDetails">
      <h2>Dein Ergebnis</h2>
      <p>
        benötigte Zeit:
        {{ this.quizStore.formatTime(this.quizStore.elapsedTime) }}h
      </p>
      <h3>Überblick</h3>
      <div class="answer-container">
        <div
          class="answer-details"
          v-for="detail of quizDetails"
          :key="detail.id"
        >
          <h3 class="answer-question">{{ decode(detail.question) }}</h3>
          <p>Deine Antworten: {{ detail.selectedAnswers }}</p>
          <div
            v-for="answerDetail of detail.answerDetails"
            :key="answerDetail.id"
            :class="answerDetail.isValid ? 'valid' : 'invalid'"
          >
            <p>
              <span>{{ answerDetail.id }}:</span>
              {{ decode(answerDetail.text) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import he from "he/he.js";
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
    decode(text) {
      return he.decode(text);
    },
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
  background-color: #ffbe33;
  padding: 0.5rem 0.5rem;
}
.invalid {
  background-color: #a3aff5;
  padding: 0 0.5rem;
}
.answer-details {
  margin-bottom: 1rem;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  background-color: #4464ad;
}
.answer-question {
  color: white;
}
</style>
