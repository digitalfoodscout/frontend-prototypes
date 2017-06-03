import * as types from '../constants/ActionTypes'

export const submitLogin = (loginData) => {
  console.log('Logging in with data', loginData);
  if(loginData.password === '1234') {
    return {type: types.LOGIN_SUCCESS};
  }
  return {type: types.LOGIN_ERROR, error: 'Wrong credentials'};
};

export const logout = () => {
  console.log('logout');
  // logoutStatus is dependent on future HTTP call
  const logoutStatus = true;
  if(logoutStatus) {
    return {type: types.LOGOUT_SUCCESS};
  }
  return {type: types.LOGOUT_ERROR, error: 'Could not log out'};
};

export const submitFoodDiaryEntry = (fdedata) => {
  console.log('Saving food diaryentry' + fdedata);
  return {type: types.ENTRY_CREATE};
};

export const submitRegister = (registerData) => {
  console.log('Registering and logging in with data' + registerData);
  return {type: types.REGISTER_START};
};

export const submitSymptom = (symptomData) => {
  console.log('Submitting Symptom with data' + symptomData);
  return {type: types.SYMPTOM_CREATE};
};
