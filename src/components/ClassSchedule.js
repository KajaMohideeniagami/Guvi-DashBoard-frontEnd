import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ClassSchedule.css';

const ClassSchedule = () => {
  const days = Array.from({ length: 45 }, (_, i) => i + 1);

  return (
    <div className="class-schedule-wrapper">
      {/* Left Side - Class Details */}
      <div className="class-details">
        <h2>Join the class on time!</h2>
        <div className="details-box">
          <h3>No session title available</h3>
          <p>Class schedule is not updated</p>
          <p><strong>Contents:</strong> No content available</p>
          <p><strong>Pre-read:</strong> No preread available</p>
        </div>
      </div>

      {/* Right Side - 45 Days Schedule */}
      <div className="schedule-sidebar">
        <h3>Sessions Roadmap</h3>
        <div className="schedule-grid">
          {days.map((day) => (
            <Link to={`/ClassSchedule/day/${day}`} key={day} className="day-circle">
              {day}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
