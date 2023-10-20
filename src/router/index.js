import { createRouter, createWebHistory } from "vue-router";
import EntryView from "../views/EntryView.vue";
import QuizView from "../views/QuizView.vue";
import ResultView from "../views/ResultView.vue";
import AdminView from "../views/AdminView";

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
  {
    path: "/result",
    name: "result",
    component: ResultView,
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
