import { userState } from './store';
import { GET_DATA } from "./constant"

const mutations = {
  [GET_DATA](state: userState, payload: boolean): void{
    console.log('mutations执行成功');
    state.loading = payload
  }
}

export default mutations