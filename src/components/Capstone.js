import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Capstone.css';

const Capstone = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Capstone/Submission');
  };

  return (
    <div className="capstone-container">
      <h2>Project Submission</h2>
      <p><strong>Name:</strong> Kaja Mohideen P</p>
      <p><strong>Project:</strong> B53WD2 TAMIL-CAPSTONE PROJECT</p>
      <p><strong>Platform:</strong> Zen Class Student Dashboard</p>

      <button className="submit-button" onClick={handleNavigate}>
        View Full Submission
      </button>
    </div>
  );
};

export default Capstone;
