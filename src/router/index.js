import { createRouter, createWebHistory } from "vue-router";
import EntryView from "../views/EntryView.vue";
import QuizView from "../views/QuizView.vue";

const routes = [
  {
    path: "/",
    name: "entry",
    component: EntryView,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
