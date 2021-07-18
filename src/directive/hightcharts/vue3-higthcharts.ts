import { defineComponent, h, ref, Ref, toRefs, PropType, watch, onMounted, onUnmounted } from "vue";
import Highcharts, { Chart, Options } from 'highcharts'
const vueHighcharts = defineComponent({
  name: "VueHigthchart",
  props: {
    type: {
      type: String as PropType<keyof typeof Highcharts>,
      default: 'chart' 
    },
    options: {
      type: Object as PropType<Options>,
      required: true
    },
    redrawOnUpdate: {
      type: Boolean,
      default: true
    },
    oneToOneUpdate: {
      type: Boolean,
      default: true
    },
    animateOnUpdate: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }){
    const chartRef = ref(null)
    const chart:Ref<Chart | null> = ref(null)
    const { options } = toRefs(props)
    if(options.value){
      watch(options, (newValue) =>{
        if(chart.value === null) {
          // chart.value.updeta()
          (<Ref<Chart>>(chart as unknown)).value.update(
            newValue,
            props.redrawOnUpdate,
            props.oneToOneUpdate,
            props.animateOnUpdate
          )
          emit('updated')
        } 
      }, {
        deep: true
      })
      onMounted(() => {
        chart.value = Highcharts[props.type](
          chartRef.value, 
          options.value,
          () => {
            emit("rendered")
          }
        )
      })
      onUnmounted(() => {
        if(chart?.value){
          (<Ref<Chart>>(chart as unknown)).value.destroy()
        }
      })
    } else {
      console.error("请传递渲染组件必须的参数");
    }
    return {
      chartRef,
      chart
    }
  },
  render() {
    return h('div', {
      class: 'vue-highcharts',
      ref: 'chartRef'
    })
  }
})

export default vueHighcharts;