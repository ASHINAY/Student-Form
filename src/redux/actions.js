// Define your action types
export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// Action creators
export function addStudent(student) {
  return { type: ADD_STUDENT, student };
}

export function editStudent(rollNo, updatedStudent) {
  return { type: EDIT_STUDENT, rollNo, updatedStudent };
}

export function deleteStudent(rollNo) {
  return { type: DELETE_STUDENT, rollNo };
}
