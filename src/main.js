import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/sass/_global.scss'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";



const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
