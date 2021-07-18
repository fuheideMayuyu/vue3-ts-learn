<template>
  <h1>{{ msg }}</h1>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <a-button type="primary">Primary Button</a-button>
  <a-button @click="state.count++">{{state.count}}</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'
// import { useStore } from "vuex"
// import type { State } from "../stroe"
import { useYdStore } from "../hooks/index"
defineProps({
  msg: String
})
const state = reactive({count: 0})
// const {state: ydState, getters} = useStore<State>()
  const { state: ydState, getters } = useYdStore()
console.log('vuex', ydState );
console.log('getters', getters["user/isLogin"] );

</script>

<style scoped>
a {
  color: #42b983;
}

</style>
