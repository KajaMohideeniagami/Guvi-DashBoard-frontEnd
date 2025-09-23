import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/ClassSchedule.css';

const DayDetail = () => {
  const { dayId } = useParams(); // Get the current day ID from the URL
  const days = Array.from({ length: 45 }, (_, i) => i + 1); // List of 45 days

  return (
    <div className="class-schedule-wrapper">
      
      {/* Left Side - Class Details */}
      <div className="class-details">
        <h2>Details for Day {dayId}</h2>
        <div className="details-box">
          <p><strong>No session title available</strong></p>
          <p>Class schedule is not updated</p>
          <p><strong>Contents:</strong> No content available</p>
          <p><strong>Pre-read:</strong> No preread available</p>
        </div>
      </div>

      {/* Right Side - 45 Days Roadmap */}
      <div className="schedule-sidebar">
        <h3>45 Days Roadmap</h3>
        <div className="schedule-grid">
          {days.map((day) => (
            <Link
              to={`/ClassSchedule/day/${day}`}
              key={day}
              className={`day-circle ${parseInt(dayId) === day ? 'active' : ''}`}
            >
              {day}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayDetail;
