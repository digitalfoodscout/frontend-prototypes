import { SYMPTOM_SAVE, SYMPTOM_CANCEL } from '../constants/ActionTypes';


export default function entry(state = { symptoms: [] }, action) {
  switch (action.type) {
    case SYMPTOM_SAVE:
      console.log(action.payload);
      // TODO pass parameters to dashboard page
      return [...state,
        {
          id: 999,
          name: "Juckende Augen",
          date: new Date('2017-04-11T10:20:30Z'),
          intensity: 2
        }
      ];
    case SYMPTOM_CANCEL:
      return state;
    default:
      return state;
  }
}
