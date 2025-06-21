import "./assets/css/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { registerSW } from "virtual:pwa-register";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

registerSW({ immediate: true });
app.use(createPinia());
app.use(router);
app.use(autoAnimatePlugin);
app.mount("#app");
