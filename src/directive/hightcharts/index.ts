import { Plugin, App } from 'vue'
import vueHighcharts from './vue3-higthcharts'
const install = (app: App) =>{
  app.component(vueHighcharts.name, vueHighcharts)
}

vueHighcharts.install = install
export default <Plugin>(vueHighcharts as unknown)
