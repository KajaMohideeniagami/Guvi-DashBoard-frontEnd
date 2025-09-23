
import React from 'react';
import CourseList from './CourseList';

const StudentDetails = () => {
  const studentName = 'John Doe'; 

  return (
    <div>
      <h1>Student Details</h1>
      <p>Student Name: {studentName}</p>
      <CourseList studentName={studentName} />
    </div>
  );
}

export default StudentDetails;
