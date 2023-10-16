<template>
  <section class="container">
    <div class="question-card">
      <h3>This is a question?</h3>
    </div>
    <div class="answer-container">
      <button class="card">This is an answer</button>
      <button class="card">This is an answer</button>
      <button class="card">This is an answer</button>
      <button class="card">This is an answer</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.question-card {
  text-align: center;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(255, 255, 255, 0.58);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
.card {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
