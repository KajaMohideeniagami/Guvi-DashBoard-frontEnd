import React, { useState } from 'react';
import './styles/PortfolioSubmission.css';

const PortfolioSubmission = () => {
  const [githubUrl, setGithubUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (githubUrl && portfolioUrl && resumeUrl) {
      alert(`Submitted Successfully!\nGitHub: ${githubUrl}\nPortfolio: ${portfolioUrl}\nResume: ${resumeUrl}`);
    } else {
      alert('Please fill out all fields before submitting!');
    }
  };

  return (
    <div className="page-container">
      <h2>Submit Your Portfolio</h2>
      <form className="portfolio-form" onSubmit={handleSubmit}>
        <label>
          GitHub URL:
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </label>

        <label>
          Portfolio URL:
          <input
            type="url"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            placeholder="https://yourportfolio.com"
          />
        </label>

        <label>
          Resume URL:
          <input
            type="url"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            placeholder="https://example.com/resume.pdf"
          />
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PortfolioSubmission;
