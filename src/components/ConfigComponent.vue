<template>
  <main class="main">
    <section>
      <div class="checkbox-section">
        <p>Wähle eine oder mehrere Kategorien</p>
      </div>
      <div class="checkbox-container" v-for="group of groups" :key="group.id">
        <input
          :id="group.id"
          type="checkbox"
          :value="group.id"
          v-model="selectedGroups"
        />
        <label :for="group.id" class="checkbox-button">{{ group.title }}</label>
      </div>
    </section>
    <section>
      <p>Choose a quiz by length</p>
      <div class="form-container">
        <select v-model="quantity" class="form-container-items">
          <option class="form-container-items" value="20">20 questions</option>
          <option class="form-container-items" value="15">15 questions</option>
          <option class="form-container-items" value="10">10 questions</option>
          <option class="form-container-items" value="5">5 questions</option>
        </select>
      </div>
    </section>
    <section>
      <button @click="startfetch" class="btn-start">Start</button>
    </section>
  </main>
</template>

<script>
import router from "@/router";
import { useQuizStore } from "../stores/QuizStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
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
        const response = await fetch("http://localhost:3000/groups");
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
.main > * + * {
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

input[type="checkbox"] {
  display: none;
}

label.checkbox-button {
  margin-top: 0.5rem;
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

input[type="checkbox"]:checked + label.checkbox-button {
  background-color: #4464ad;
}

.form-container {
  margin-top: 0.5rem;
  cursor: pointer;
}

.form-container-item {
  padding: 0.5rem 1rem;
}

.form-container-items {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.btn-start {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.btn-start:checked {
  background-color: #4464ad;
}
</style>
