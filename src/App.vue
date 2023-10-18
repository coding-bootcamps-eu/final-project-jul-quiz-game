<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
};
</script>
