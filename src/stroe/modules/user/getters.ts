import { userState } from './store';

const moduleGetters = {
  isLogin:(state: userState):string => {
    return `灯笼${state.loading}`
  }
}

export default moduleGetters