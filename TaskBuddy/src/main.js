import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "@/routers/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faRankingStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faRankingStar, faUsers);

createApp(App)
  .use(Router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
