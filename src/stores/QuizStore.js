import { defineStore } from "pinia";

// erstellt neuen Store, speichert in Variable und exportiert diesen
export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    test: "test",
    groups: [],
  }),
  getters: {},
  actions: {
    async getQuestions(limit, groupArray) {
      let url = "http://localhost:3000/quiz/collection?";
      for (let i = 0; i < groupArray; i++) {
        url += "group=" + groupArray[i] + "&";
      }
      const response = await fetch(`${url}limit=${limit}&random=1`);
      const { data } = await response.json();
      this.questions.push(...data);
    },
  },
});
