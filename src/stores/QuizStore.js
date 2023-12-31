import { defineStore } from "pinia";

// erstellt neuen Store, speichert in Variable und exportiert diesen
export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
    Qanswers: [],
    elapsedTime: 0,
    Qresults: {},
    ratio: 0,
  }),
  getters: {},
  actions: {
    async getQuestions(limit, groupArray) {
      try {
        this.questions = []; //for reset function
        let url =
          "https://23-juli-quiz-game-app.api.cbe.uber.space/quiz/collection?";
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
    async getResults() {
      const answers = {
        elapsedTime: this.elapsedTime,
        data: this.Qanswers,
      };
      try {
        const response = await fetch(
          "https://23-juli-quiz-game-app.api.cbe.uber.space/quiz/result",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
          }
        );
        const result = await response.json();
        console.log(result);
        const { passedRatio } = result;
        this.ratio = parseFloat(passedRatio.replace("%", ""));

        this.Qresults = result;
      } catch (err) {
        console.log(err);
      }
    },
    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(remainingSeconds).padStart(2, "0")}`;
    },
  },
});
