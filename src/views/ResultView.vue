<template>
  <div>
    <div v-if="!seeDetails" class="container">
      <CongratsComponent></CongratsComponent>
      <button class="btn" @click="resetGame">Try again</button>
      <button class="btn" @click="toggleDetails">More details</button>
    </div>
    <div class="result-container" v-if="seeDetails">
      <h2 class="h">Your result</h2>
      <p>
        Time needed:
        <strong>{{
          this.quizStore.formatTime(this.quizStore.elapsedTime)
        }}</strong>
      </p>
      <h3 class="h">Overview</h3>
      <div class="answer-container">
        <div
          class="answer-details"
          v-for="detail of quizDetails"
          :key="detail.id"
        >
          <h3 class="answer-question">{{ decode(detail.question) }}</h3>
          <p class="your-answers">Your answers: {{ detail.selectedAnswers }}</p>
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
h2,
h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.h {
  margin-top: 0.5rem;
}

.result-container {
  text-align: center;
  display: grid;
}

.answer-container {
  padding: 5px 5px;
}
.valid {
  background-color: #ffbe33;
  padding: 0.5rem 0.5rem;
}
.invalid {
  background-color: #a3aff5;
  padding: 0 0.5rem;
}

.your-answers {
  margin-bottom: 0.5rem;
}

.answer-details {
  margin-top: 0.5rem;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  background-color: #4464ad;
}
.answer-question {
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.container {
  display: grid;
  align-items: center;
}
.btn {
  grid-template-columns: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
