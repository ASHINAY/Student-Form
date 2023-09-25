import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../redux/actions';

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.rollNo}>
            {student.firstName} {student.lastName}
            <button onClick={() => deleteStudent(student.rollNo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, { deleteStudent })(StudentList);
