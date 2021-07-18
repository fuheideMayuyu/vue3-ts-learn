import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import Antd from 'ant-design-vue';
import store from './stroe'
import router from './router'
import vueHighcharts from './directive/hightcharts';
const app = createApp(App)
app.use(vueHighcharts)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
