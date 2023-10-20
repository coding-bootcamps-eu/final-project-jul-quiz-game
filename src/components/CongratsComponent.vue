<template>
  <main class="main">
    <section class="congrats-container">
      <p>
        Your answers were <strong>{{ quizStore.ratio }}%</strong> correct
      </p>
      <p>
        benötigte Zeit:
        {{ this.quizStore.formatTime(this.quizStore.elapsedTime) }}h
      </p>
      <p v-if="quizStore.ratio == 100">I am very much impressed</p>
      <p v-else-if="quizStore.ratio > 50 && quizStore.ratio < 99">
        I am very impressed
      </p>
      <p v-else-if="quizStore.ratio < 50">I am encouraging you neverless</p>
    </section>
  </main>
</template>
<script>
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";

export default {
  computed: {
    ...mapStores(useQuizStore),
  },
};
</script>

<style>
.main > * + * {
  margin-bottom: 1rem;
}

.congrats-container {
  margin-bottom: 1rem;
}

.btn-result {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
