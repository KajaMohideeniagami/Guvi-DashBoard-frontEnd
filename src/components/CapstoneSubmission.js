import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CapstoneSubmission.css';

const CapstoneSubmission = () => {
  const navigate = useNavigate();

  return (
    <div className="capstone-submission-container">
      <h2>Full Project Details</h2>
      <p><strong>Name:</strong> Kaja Mohideen P</p>
      <p><strong>Project:</strong> B53WD2 TAMIL-CAPSTONE PROJECT</p>
      <p><strong>Platform:</strong> Zen Class Student Dashboard</p>

      <h3>Description:</h3>
      <p>
        To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.
      </p>

      <h3>Task Title:</h3>
      <p>Zen Class Student Dashboard</p>

      <h3>Specifications on Design:</h3>
      <ul>
        <li><strong>Front-end:</strong> ReactJS</li>
        <li><strong>Back-end:</strong> NodeJS</li>
        <li><strong>Database:</strong> MongoDB</li>
      </ul>

      <h3>Requirements:</h3>
      <ul>
        <li>Maintain CODE QUALITY.</li>
        <li>Use fonts/icons if required.</li>
        <li>Include various charts in the design.</li>
        <li>Use Bootstrap/Material CSS for styling.</li>
      </ul>

      <h3>Submission Process:</h3>
        <ul>
        <li>Push all work files to GitHub in two repositories:
            <ul>
            <li>Frontend: <code>project-name-frontend</code></li>
            <li>Backend: <code>project-name-backend</code></li>
            </ul>
        </li>
        <li>Deploy frontend on <code>www.netlify.com</code>.</li>
        <li>Deploy backend on <code>render.com</code>.</li>
        </ul>

        <h3>Helpful Links:</h3>
        <ul>
        <li>Bootstrap Docs: <code>https://getbootstrap.com/docs/4.4/getting-started/introduction/</code></li>
        <li>Chart.js: <code>https://www.chartjs.org/</code></li>
        <li>JWT Introduction: <code>https://jwt.io/introduction/</code></li>
        <li>React Bootstrap: <code>https://react-bootstrap.github.io/</code></li>
        <li>Materialize CSS: <code>https://materializecss.com/</code></li>
        <li>Tailwind CSS: <code>https://tailwindcss.com/</code></li>
        <li>Express.js: <code>https://expressjs.com/</code></li>
        </ul>


      <h3>Terms and Conditions:</h3>
      <ul>
        <li>Do not share this confidential document.</li>
        <li>Open-source your code without mentioning company details.</li>
        <li>Your code will not be used for commercial purposes.</li>
        <li>Developers must identify the use case for the Capstone project.</li>
      </ul>

      <p><strong>Note:</strong> Any violation of terms is strictly prohibited.</p>

      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅️ Back to Capstone
      </button>
    </div>
  );
};

export default CapstoneSubmission;
