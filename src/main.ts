import { createApp } from 'vue';
import App from './App.vue';
import '@/style/index.less';
import '@/style/variables.less';
import router from '@/router/router'

const app = createApp(App);

app.use(router);

app.mount("#app");
