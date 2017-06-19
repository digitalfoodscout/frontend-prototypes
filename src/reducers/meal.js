import { ENTRY_SAVE, ENTRY_CANCEL } from '../constants/ActionTypes';


export default function entry(state = { meals: [] }, action) {
  switch (action.type) {
    case ENTRY_SAVE:
      console.log(action.payload);
      // TODO pass parameters to dashboard page
      return [...state,
        {
          id: 999,
          name: "Aal mit Küchenabfällen",
          date: new Date('2017-04-11T10:20:30Z'),
          contains: [
            {
              amount: 500,
              food: {
                id: 'BC200100',
                name: 'Aal mit Küchenabfällen'
              }
            }
          ]
        }
      ];
    case ENTRY_CANCEL:
      return state;
    default:
      return state;
  }
}
