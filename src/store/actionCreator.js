import * as types from './actionTypes';

export const changeInputValue = ( (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value
}))

export const changelistValue = ( () => ({
  type: types.CHANGE_LIST_VALUE
}))

export const deleteitem = ( (index) => ({
  type: types.DELETE_ITEM,
  index
}))

