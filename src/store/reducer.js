import * as types from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if(Object.is(action.type,types.CHANGE_INPUT_VALUE)){
    newState.inputValue = action.value;
    return newState;
  }
  if(Object.is(action.type,types.CHANGE_LIST_VALUE)){
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }
  if(Object.is(action.type,types.DELETE_ITEM)){
    newState.list.splice(action.index , 1);
    return newState;
  }
  return state
}