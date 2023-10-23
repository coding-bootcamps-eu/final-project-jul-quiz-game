<template>
  <section
    v-if="quizStore.questions.length > 0 && quizStore.questions.length > qi"
    class="container"
  >
    <p class="category">
      {{ quizStore.questions[qi].groupName }} | Question {{ qi + 1 }}/{{
        quizStore.questions.length
      }}
    </p>
    <div>
      <div class="progress-bar">
        <div class="progress-fill" :style="progressStyle"></div>
      </div>
    </div>
    <div class="question-card">
      <h3>{{ quizStore.questions[qi].question }}</h3>
    </div>
    <div
      class="answer-container"
      v-for="answer of quizStore.questions[qi].answers"
      :key="answer.id"
    >
      <input
        type="checkbox"
        :id="answer.id"
        :value="answer.id"
        v-model="selectedAnswers"
      />
      <label :for="answer.id" class="checkbox-button">{{
        decode(answer.text)
      }}</label>
    </div>
    <button
      v-if="qi >= quizStore.questions.length - 1"
      class="btn"
      @click="getResult"
    >
      Auswertung
    </button>
    <button v-else @click="nextQuestion" class="btn next">Next</button>
  </section>
</template>

<script>
import he from "he/he.js";
import router from "@/router";
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";
export default {
  data() {
    return {
      qi: 0,
      selectedAnswers: [],
    };
  },
  computed: {
    ...mapStores(useQuizStore),

    progress() {
      const totalQuestions = this.quizStore.questions.length;
      return (this.qi / totalQuestions) * 100;
    },
    progressStyle() {
      return {
        width: this.progress + "%",
      };
    },
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.quizStore.elapsedTime += 1;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.interval);
    },
    decode(text) {
      return he.decode(text);
    },
    nextQuestion() {
      this.quizStore.Qanswers.push({
        id: this.quizStore.questions[this.qi].id,
        selected: this.selectedAnswers,
      });
      this.selectedAnswers = [];
      this.qi++;
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
    },
    getResult() {
      this.nextQuestion(), router.push("/result");
    },
  },
  created() {
    this.startTimer();
  },
  beforeUnmount() {
    this.stopTimer();
  },
};
</script>
<style lang="scss" scoped>
.progress-bar {
  width: 100%;
  background-color: #a3aff5;
  height: 20px;
  border-radius: 5px;
}

.progress-fill {
  height: 100%;
  background-color: #ffbe33;
  transition: width 0.5s;
  border-radius: 5px;
}
.next {
  cursor: pointer;
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: column;
}
.category {
  color: #4464ad;
  align-self: center;
}
.question-card {
  text-align: center;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem 1rem;
  background-color: #ffbe33;
  color: white;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.question-card h3 {
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.41);
}
.answer-container {
  margin-bottom: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
}

/* standardmäßige Checkbox */
input[type="checkbox"] {
  display: none;
}
/* Label als Button */
.checkbox-button {
  color: white;
  text-align: center;
  width: 100%;
  font-size: 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: #a3aff5;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.41);
}

input[type="checkbox"]:checked + label.checkbox-button {
  background-color: #4464ad;
}
</style>
