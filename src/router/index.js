import { createRouter, createWebHistory } from "vue-router";
import EntryView from "@views/EntryView.vue";

const routes = [
  {
    path: "/",
    name: "entry",
    component: EntryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
