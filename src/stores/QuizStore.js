import { defineStore } from "pinia";

// erstellt neuen Store, speichert in Variable und exportiert diesen
export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    Qanswers: [],
  }),
  getters: {},
  actions: {
    async getQuestions(limit, groupArray) {
      try {
        this.questions = []; //for reset function
        let url = "http://localhost:3000/quiz/collection?";
        for (let i = 0; i < groupArray; i++) {
          url += "group=" + groupArray[i] + "&";
        }
        const response = await fetch(`${url}limit=${limit}&random=1`);
        const { data } = await response.json();
        this.questions.push(...data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
