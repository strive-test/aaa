import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/reset.css";
import router from "./router";
console.log("dev/2.0.1");
createApp(App).use(router).mount("#app");
