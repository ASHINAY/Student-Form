import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actions';

// Initial state
const initialState = {
  students: [],
};

// Reducer function
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student],
      };
    case EDIT_STUDENT:
      // Implement logic to edit a student in the state
      return state;
    case DELETE_STUDENT:
      // Implement logic to delete a student from the state
      return state;
    default:
      return state;
  }
}

export default rootReducer;
