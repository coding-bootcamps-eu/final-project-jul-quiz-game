<template>
  <header class="header">
    <section class="header-section">
      <p>Quiz Game<span>💡</span></p>
    </section>
    <section>
      <nav class="nav-section">
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
      </nav>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  margin-bottom: 20px;
  padding: 10px 10px;
}
.header-section {
  padding: 10px 10px;
  font-size: 1.5rem;
}

.nav-section {
  display: flex;
  column-gap: 5px;
  margin-left: 8px;
}
</style>
