import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/main.scss";
import "@/assets/illustrations/header.svg";
import "@/assets/illustrations/searching.svg";
import "@/assets/illustrations/summary.svg";

createApp(App).use(createPinia()).use(router).mount("#app");
