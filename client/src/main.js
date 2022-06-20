import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import { appAxios } from "./utils/appAxios";

import io from "socket.io-client";
const socket = io("http://localhost:8080");

// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";


app.use(createPinia())
app.use(router)
//app.use(Toast);


app.config.globalProperties.$socket = socket;
app.config.globalProperties.$appAxios = appAxios;




app.mount('#app')
