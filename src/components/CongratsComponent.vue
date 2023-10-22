<template>
  <main class="main">
    <section class="container">
      <img alt="summary illustration" class="summary-svg" :src="summarySvg" />
    </section>
    <section class="congrats-container">
      <div class="congrats-content">
        <h2>Resume</h2>
        <p>
          Your answers were <strong>{{ quizStore.ratio }}%</strong> correct
        </p>
        <p>
          Time needed:
          <strong
            >{{ this.quizStore.formatTime(this.quizStore.elapsedTime) }}
          </strong>
        </p>
      </div>
      <p v-if="quizStore.ratio == 100">
        You have cracked the game. Impressive! 👌🏽
      </p>
      <p v-else-if="quizStore.ratio > 50 && quizStore.ratio < 99">
        Not bad, not bad at all! 💪🏽
      </p>
      <p v-else-if="quizStore.ratio < 50">
        Practice makes perfect. Hang on! 🫶🏽
      </p>
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

  data() {
    return {
      summarySvg: require("@/assets/illustrations/summary.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.summary-svg {
  max-width: 18rem;
  padding: 0.5rem 1rem;
  margin-top: 8px;
}
.main > * + * {
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: 1rem;
}

.congrats-container {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  display: grid;
}

.congrats-content {
  padding: 10px 5px;
  background-color: #ffbe33;
  margin-bottom: 0.5rem;
}

.congrats-items {
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
