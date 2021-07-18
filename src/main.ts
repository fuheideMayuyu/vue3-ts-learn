import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import Antd from 'ant-design-vue';
import store from './stroe'
createApp(App).use(Antd).use(store).mount('#app')
