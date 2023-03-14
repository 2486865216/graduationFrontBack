import { createApp } from 'vue';
import App from './App.vue';

import {Button} from 'tdesign-vue-next';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);

app.use(Button);

app.mount("#app");
