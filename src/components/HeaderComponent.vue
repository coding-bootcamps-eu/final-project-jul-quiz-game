<template>
  <header class="header">
    <div class="header-section">
      <img
        @click="loadURL"
        alt="header logo"
        class="header-logo"
        :src="headerLogo"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: require("@/assets/illustrations/header.svg"),
    };
  },
  methods: {
    loadURL() {
      this.$router = [];
      this.$router.push("http://localhost:8080/");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-logo {
  max-width: 5rem;
}
.header {
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: #a3aff5;
  padding: 8px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.header-logo {
  width: 10rem;
  cursor: pointer;
}
</style>
