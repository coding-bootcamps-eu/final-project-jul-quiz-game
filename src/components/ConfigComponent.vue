<template>
  <body>
    <main class="main">
      <section class="container">
        <img
          alt="start illustration"
          class="searching-svg"
          :src="searchingSvg"
        />
      </section>
      <section class="container">
        <div>
          <h2>Choose a quiz category</h2>
        </div>
        <div class="form-container" v-for="group of groups" :key="group.id">
          <input
            :id="group.id"
            type="checkbox"
            :value="group.id"
            v-model="selectedGroups"
          />
          <label :for="group.id" class="btn">{{ group.title }}</label>
        </div>
      </section>
      <h3>OR</h3>
      <section class="container">
        <h2>Choose a quiz by length</h2>
        <div class="form-container">
          <select v-model="quantity" class="form-container-items btn">
            <option class="form-container-items" value="20">
              20 questions
            </option>
            <option class="form-container-items" value="15">
              15 questions
            </option>
            <option class="form-container-items" value="10">
              10 questions
            </option>
            <option class="form-container-items" value="5">5 questions</option>
          </select>
        </div>
      </section>
      <section>
        <button @click="startfetch" class="btn-start">Start the game</button>
      </section>
    </main>
  </body>
</template>

<script>
import router from "@/router";
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      searchingSvg: require("@/assets/illustrations/searching.svg"),
      quantity: 20,
      groups: [],
      selectedGroups: [],
    };
  },
  computed: {
    ...mapStores(useQuizStore),
  },
  methods: {
    async startfetch() {
      await this.quizStore.getQuestions(this.quantity, this.selectedGroups);
      await router.push("/quiz");
    },
    async getGroups() {
      try {
        const response = await fetch(
          "https://23-juli-quiz-game-app.api.cbe.uber.space/groups"
        );
        const data = await response.json();
        this.groups.push(...data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getGroups();
  },
};
</script>

<style>
.line-1 {
  height: 1px;
  background: black;
}
.main > * + * {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.41);
}

.container {
  display: grid;
  justify-content: center;
}

.searching-svg {
  max-width: 18rem;
  padding: 0.5rem 1rem;
  margin-top: 8px;
}

input[type="checkbox"] {
  display: none;
}

label.btn {
  margin-top: 0.5rem;
  display: inline-block;
}

input[type="checkbox"]:checked + label.btn {
  background-color: #ffbe33;
}

.form-container {
  margin-top: 0.5rem;
  display: grid;
}

.form-container-items {
  padding: 0.5rem 1rem;
  grid-template-columns: 100px;
}

.btn-start {
  font-size: 1.2rem;
  margin: 5px;
  background-color: #ffbe33;
  font-family: Poppins, sans-serif;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  border-style: none;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.41);
  transition: transform 0.2s;
}
.btn-start:hover {
  transform: scale(1.2);
}
@media screen and (min-width: 786px) {
  html {
    font-size: 18px;
  }
}

@media screen and (min-width: 992px) {
  html {
    font-size: 20px;
  }
}
</style>
