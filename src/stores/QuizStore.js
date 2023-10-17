import { defineStore } from "pinia";

// erstellt neuen Store, speichert in Variable und exportiert diesen
export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [],
  }),
  getters: {},
  actions: {},
});
