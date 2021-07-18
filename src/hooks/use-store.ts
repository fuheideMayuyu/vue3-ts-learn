import { useStore } from "vuex"
import { State } from '../stroe'
import { Getters } from '../stroe/utils'

interface IUserYdStore {
  state: State,
  getters: Getters
}
const useYdStore = ():IUserYdStore =>{
  const {state, getters}:IUserYdStore = useStore<State>()
  return { state, getters}

}
export {
  useYdStore
}
export default useYdStore