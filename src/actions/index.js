import * as types from "../constants/ActionTypes";

export const submitLogin = loginData => {
  console.log('Logging in with data', loginData);
  if (loginData.password === '1234') {
    return { type: types.LOGIN_SUCCESS };
  }
  return { type: types.LOGIN_ERROR, error: 'Wrong credentials' };
};

export const logout = () => {
  console.log('logout');
  // logoutStatus is dependent on future HTTP call
  const logoutStatus = true;
  if (logoutStatus) {
    return { type: types.LOGOUT_SUCCESS };
  }
  return { type: types.LOGOUT_ERROR, error: 'Could not log out' };
};

export const submitFoodDiaryEntry = fdedata => {
  console.log(`Saving food diaryentry`);
  return { type: types.ENTRY_SAVE, payload: fdedata };
};

export const submitRegister = () => {
  console.log(`Registering and logging in with data`);
  return { type: types.REGISTER_START };
};

export const submitSymptom = symptomdata => {
  console.log(`Submitting Symptom with data`);
  return { type: types.SYMPTOM_SAVE, payload: symptomdata };
};
