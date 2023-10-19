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
</style>

<script>
export default {};
</script>
