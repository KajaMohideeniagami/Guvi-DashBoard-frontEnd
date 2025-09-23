import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './styles/SubmitTask.css';

const SubmitTask = () => {
  const [taskUrl, setTaskUrl] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!taskUrl) {
      alert('Please enter the task URL before submitting.');
      return;
    }

    console.log('Submitted Task URL:', taskUrl);
    
    // ✅ Navigate back to the Task page after submitting
    navigate('/Task');
  };

  return (
    <div className="submit-task-container">
      <h2>Submit Your Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="taskUrl">Task URL</label>
          <input
            type="url"
            id="taskUrl"
            value={taskUrl}
            onChange={(e) => setTaskUrl(e.target.value)}
            placeholder="Enter task URL"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Task</button>
      </form>
    </div>
  );
};

export default SubmitTask;
