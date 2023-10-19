<template>
  <main class="main">
    <section>
      <div class="congrats-container">
        <p>Your answers were <strong>100 % </strong>correct</p>
        <p>(I am very much impressed)</p>
      </div>
      <div class="congrats-container">
        <p>Your answers were <strong>50% to 99% </strong>correct</p>
        <p>(I am very impressed)</p>
      </div>
      <div class="congrats-container">
        <p>Your answers were <strong>less than 50% </strong>correct</p>
        <p>(I am encouraging you neverless)</p>
      </div>
    </section>
    <section>
      <RouterLink to="/">Noch mal versuchen?</RouterLink>
    </section>
  </main>
</template>

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

<script>
export default {};
</script>
