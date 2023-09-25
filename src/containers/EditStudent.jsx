import React from 'react';
import { connect } from 'react-redux';
import StudentForm from '../components/StudentForm';
import { editStudent } from '../redux/actions';

function EditStudent({ match, students, editStudent }) {
  const { rollNo } = match.params;
  const existingStudent = students.find((student) => student.rollNo === rollNo);

  return (
    <div>
      <h2>Edit Student</h2>
      <StudentForm existingStudent={existingStudent} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, { editStudent })(EditStudent);
