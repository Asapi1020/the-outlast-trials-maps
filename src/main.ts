import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/styles";
import Router from "./Router";

createApp(App).use(vuetify).use(Router).mount("#app");
