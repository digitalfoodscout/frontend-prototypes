import * as types from '../constants/ActionTypes'
/*
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
/**/

export const submitLogin = (loginData) => {
  console.log('Logging in with data' + loginData);
  return { type: types.LOGIN_START };
};


export const submitFoodDiaryEntry = (fdedata) => {
  console.log('Saving food diaryentry' + fdedata);
  return {type: types.ENTRY_CREATE};
};
