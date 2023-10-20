/* eslint-disable no-unused-vars */
import { defineStore } from "pinia";

// erstellt neuen Store, speichert in Variable und exportiert diesen
export const useAdminStore = defineStore("admin", {
  // state = data
  state: () => ({
    test: "Test",
  }),
  // getters = computed
  getters: {
    TestUpperCase() {
      return this.test.toUpperCase();
    },
  },
  //actions = methods
  actions: {
    // CREATE POST
    async createPost(groupID, isActive, question, answers) {
      const post = {
        groupID: groupID,
        isActive: isActive,
        question: question,
        answers: answers,
      };
      const response = await fetch("http://localhost:3000/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    },
  },
});
