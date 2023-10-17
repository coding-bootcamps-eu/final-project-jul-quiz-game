<template>
  <main class="container">
    <QuestionComponent></QuestionComponent>
  </main>
</template>

<script>
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";
import QuestionComponent from "../components/QuestionComponent.vue";
export default {
  components: { QuestionComponent },
  computed: {
    ...mapStores(useQuizStore),
  },
};
</script>
