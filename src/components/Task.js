import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Task.css';

const Task = () => {
  const navigate = useNavigate();

  // Generating 45 tasks dynamically
  const tasks = Array.from({ length: 45 }, (_, index) => ({
    day: index + 1,
    title: `Day ${index + 1} Task`,
    description: `Complete the task for Day ${index + 1}.`,
    link: `https://example.com/submit-task-day-${index + 1}`, // Replace with actual links
  }));

  // Splitting tasks into 3 columns
  const columns = [tasks.slice(0, 15), tasks.slice(15, 30), tasks.slice(30, 45)];

  return (
    <div className="task-container">
      <h2>45 Days Task Challenge</h2>
      <div className="task-columns">
        {columns.map((columnTasks, colIndex) => (
          <div key={colIndex} className="task-column">
            {columnTasks.map((task, index) => (
              <div key={index} className="task-item">
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <button
                  className="submit-link"
                  onClick={() => navigate(`/submit-task?url=${encodeURIComponent(task.link)}`)}
                >
                  Submit Task
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
