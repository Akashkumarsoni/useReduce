
import { actions } from './actions'

const reducer = (state,action) => {
  switch(action){
    case actions:
        return alert(action.type);
    default:
    return {...state}
  }
}

export default reducer