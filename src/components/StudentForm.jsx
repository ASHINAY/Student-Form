import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addStudent, editStudent } from '../redux/actions';

function StudentForm({ addStudent, editStudent, existingStudent }) {
  const [studentData, setStudentData] = useState({
    rollNo: '',
    firstName: '',
    lastName: '',
    address: '',
    subjects: [],
    gender: '',
    photo: '',
  });

  // Use useEffect to populate the form if editing an existing student
  useEffect(() => {
    if (existingStudent) {
      setStudentData(existingStudent);
    }
  }, [existingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingStudent) {
      editStudent(existingStudent.rollNo, studentData); // Dispatch the action to edit a student
    } else {
      addStudent(studentData); // Dispatch the action to add a student
    }
    // Clear the form or redirect as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render your form fields here */}
      <button type="submit">{existingStudent ? 'Edit Student' : 'Add Student'}</button>
    </form>
  );
}

export default connect(null, { addStudent, editStudent })(StudentForm);
