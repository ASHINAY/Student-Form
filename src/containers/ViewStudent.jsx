import React from 'react';
import { connect } from 'react-redux';

function ViewStudent({ match, students }) {
  const { rollNo } = match.params;
  const student = students.find((student) => student.rollNo === rollNo);

  if (!student) {
    return <div>Student not found.</div>;
  }

  return (
    <div>
      <h2>View Student</h2>
      <div>
        <strong>Roll No:</strong> {student.rollNo}
      </div>
      <div>
        <strong>Name:</strong> {student.firstName} {student.lastName}
      </div>
      <div>
        <strong>Address:</strong> {student.address}
      </div>
      <div>
        <strong>Subjects:</strong> {student.subjects.join(', ')}
      </div>
      <div>
        <strong>Gender:</strong> {student.gender}
      </div>
      <div>
        <strong>Photo:</strong> {/* Display the student's photo here */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps)(ViewStudent);
