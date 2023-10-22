<template>
  <main class="main">
    <section>
      <div class="">
        <h2>Choose a category</h2>
      </div>
      <div class="" v-for="group of groups" :key="group.id">
        <input
          :id="group.id"
          type="checkbox"
          :value="group.id"
          v-model="selectedGroups"
        />
        <label :for="group.id" class="btn">{{ group.title }}</label>
      </div>
    </section>
    <section>
      <h2>Choose a quiz by length</h2>
      <div class="form-container">
        <select v-model="quantity" class="form-container-items btn">
          <option class="form-container-items" value="20">20 questions</option>
          <option class="form-container-items" value="15">15 questions</option>
          <option class="form-container-items" value="10">10 questions</option>
          <option class="form-container-items" value="5">5 questions</option>
        </select>
      </div>
    </section>
    <section>
      <button @click="startfetch" class="btn-start">start the game</button>
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

label.btn {
  margin-top: 0.5rem;
  display: inline-block;
}

input[type="checkbox"]:checked + label.btn {
  background-color: #ffbe33;
}

.form-container {
  margin-top: 0.5rem;
}

.form-container-item {
  padding: 0.5rem 1rem;
}
.btn-start {
  font-size: 1.2rem;
  margin: 5px;
  background-color: #4464ad;
  font-family: Poppins, sans-serif;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
</style>
