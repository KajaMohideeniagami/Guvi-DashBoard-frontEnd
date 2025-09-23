import React from 'react';
import './CourseList.css'; // ✅ Import external CSS

const CourseList = () => {
  const courses = [
    { id: 1, title: 'Introduction React', instructor: 'John Doe', duration: '2 weeks' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith', duration: '4 weeks' },
    { id: 3, title: 'HTML and CSS Basics', instructor: 'Alice Johnson', duration: '3 weeks' },
    { id: 4, title: 'Python for Beginners', instructor: 'Michael Williams', duration: '5 weeks' },
    { id: 5, title: 'Data Structures and Algorithms', instructor: 'Daniel Davis', duration: '6 weeks' },
    { id: 6, title: 'Advanced React Techniques', instructor: 'Sophia Martinez', duration: '4 weeks' },
    { id: 7, title: 'Web Development with Node.js', instructor: 'William Jones', duration: '6 weeks' },
    { id: 8, title: 'Machine Learning Fundamentals', instructor: 'Ava Garcia', duration: '8 weeks' },
    { id: 9, title: 'Database Design and Implementation', instructor: 'James Rodriguez', duration: '5 weeks' },
    { id: 10, title: 'Network Security', instructor: 'Isabella Lopez', duration: '7 weeks' },
    { id: 11, title: 'Mobile App Development', instructor: 'David Hernandez', duration: '6 weeks' },
    { id: 12, title: 'UI/UX Design Principles', instructor: 'Mia Martinez', duration: '4 weeks' },
    { id: 13, title: 'Digital Marketing Strategies', instructor: 'Joseph Lee', duration: '3 weeks' },
    { id: 14, title: 'Financial Accounting Basics', instructor: 'Charlotte Taylor', duration: '4 weeks' },
    { id: 15, title: 'Project Management Fundamentals', instructor: 'Ryan White', duration: '5 weeks' },
    { id: 16, title: 'Business Analytics', instructor: 'Emily Clark', duration: '6 weeks' },
    { id: 17, title: 'Artificial Intelligence Concepts', instructor: 'Nicholas Moore', duration: '7 weeks' },
    { id: 18, title: 'Ethical Hacking Techniques', instructor: 'Madison Wilson', duration: '6 weeks' },
    { id: 19, title: 'Digital Photography Fundamentals', instructor: 'Benjamin Brown', duration: '4 weeks' },
    { id: 20, title: 'Creative Writing Workshop', instructor: 'Chloe Anderson', duration: '3 weeks' }
  ];

  return (
    <div className="course-list">
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong> - {course.instructor} ({course.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
