<template>
  <header class="header">
    <!--<img alt="header logo" class="header-logo" :src="headerLogo" /> -->
    <div @click="this.$router.push('/')" class="header-icon">
      <svg
        class="header-logo"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path d="M13 4H4v9.01h2V6h7V4z" fill="white" />
        <path
          d="M29.49 13.12l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 10 14v10a1 1 0 0 0 .52.87l9 5A1 1 0 0 0 20 30a1.05 1.05 0 0 0 .49-.13l9-5A1 1 0 0 0 30 24V14a1 1 0 0 0-.51-.88zM19 27.3l-7-3.89v-7.72l7 3.89zm1-9.45L13.06 14L20 10.14L26.94 14zm8 5.56l-7 3.89v-7.72l7-3.89z"
          fill="white"
        />
      </svg>
    </div>
    <p @click="this.$router.push('/')" id="heading">Coding Quiz</p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: require("@/assets/illustrations/header.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#heading {
  color: white;
  font-family: "Press Start 2P", sans-serif;
  cursor: pointer;
}
.header-logo {
  display: inline-block;
}
.header {
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: #4464ad;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.header-logo {
  cursor: pointer;
}
</style>
