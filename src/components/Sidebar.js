import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';
import trainingIcon from '../assets/training_icon.png';
import dashboardIcon from '../assets/dashboard.png';
import taskIcon from '../assets/task.png';
import webcodeIcon from '../assets/webcode.png';
import capstoneIcon from '../assets/capstone.png';
import placementIcon from '../assets/placement.png';
import queriesIcon from '../assets/queries.png';
import requirementIcon from '../assets/requirement.png';
import portfolioIcon from '../assets/portfolio.png';
import applicationIcon from '../assets/application.png';
import interviewTaskIcon from '../assets/interview_task.png';
import leaveIcon from '../assets/leave.png';
import mockInterviewIcon from '../assets/mock_interview.png';
import certificateIcon from '../assets/certificate.png';
import testimonialIcon from '../assets/testimonial.png';
import leaderboardIcon from '../assets/leaderboard.png';
import syllabusIcon from '../assets/syllabus.png';
import placementBoardIcon from '../assets/placement_board.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/ClassSchedule">
              <img src={trainingIcon} alt="Training Icon" className="icon" />
              <span className="text">Class</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
              <span className="text">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/Task">
              <img src={taskIcon} alt="Task Icon" className="icon" />
              <span className="text">Task</span>
            </Link>
          </li>

          <li>
            <Link to="/WebCode">
              <img src={webcodeIcon} alt="WebCode Icon" className="icon" />
              <span className="text">WebCode</span>
            </Link>
          </li>

          <li>
            <Link to="/Capstone">
              <img src={capstoneIcon} alt="Capstone Icon" className="icon" />
              <span className="text">Capstone</span>
            </Link>
          </li>

          <li>
            <Link to="/PlacementSession">
              <img src={placementIcon} alt="Placement Icon" className="icon" />
              <span className="text">Placement Session</span>
            </Link>
          </li>

          <li>
            <Link to="/MyQueries">
              <img src={queriesIcon} alt="Queries Icon" className="icon" />
              <span className="text">My Queries</span>
            </Link>
          </li>

          <li>
            <Link to="/Requirement">
              <img src={requirementIcon} alt="Requirement Icon" className="icon" />
              <span className="text">Requirement</span>
            </Link>
          </li>

          <li>
            <Link to="/PortfolioSubmission">
              <img src={portfolioIcon} alt="Portfolio Icon" className="icon" />
              <span className="text">Portfolio Submission</span>
            </Link>
          </li>

          <li>
            <Link to="/Application">
              <img src={applicationIcon} alt="Application Icon" className="icon" />
              <span className="text">Application</span>
            </Link>
          </li>

          <li>
            <Link to="/InterviewTask">
              <img src={interviewTaskIcon} alt="Interview Task Icon" className="icon" />
              <span className="text">Interview Task</span>
            </Link>
          </li>

          <li>
            <Link to="/LeaveApplication">
              <img src={leaveIcon} alt="Leave Icon" className="icon" />
              <span className="text">Leave Application</span>
            </Link>
          </li>

          <li>
            <Link to="/MockInterview">
              <img src={mockInterviewIcon} alt="Mock Interview Icon" className="icon" />
              <span className="text">Mock Interview</span>
            </Link>
          </li>

          <li>
            <Link to="/Certificate">
              <img src={certificateIcon} alt="Certificate Icon" className="icon" />
              <span className="text">Certificate</span>
            </Link>
          </li>

          <li>
            <Link to="/Testimonial">
              <img src={testimonialIcon} alt="Testimonial Icon" className="icon" />
              <span className="text">Testimonial</span>
            </Link>
          </li>

          <li>
            <Link to="/Leaderboard">
              <img src={leaderboardIcon} alt="Leaderboard Icon" className="icon" />
              <span className="text">Leaderboard</span>
            </Link>
          </li>

          <li>
            <Link to="/Syllabus">
              <img src={syllabusIcon} alt="Syllabus Icon" className="icon" />
              <span className="text">Syllabus</span>
            </Link>
          </li>

          <li>
            <Link to="/PlacementBoard">
              <img src={placementBoardIcon} alt="Placement Board Icon" className="icon" />
              <span className="text">Placement Board</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
