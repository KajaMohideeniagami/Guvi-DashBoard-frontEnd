import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ClassSchedule from './components/ClassSchedule';
import DayDetail from './components/DayDetail';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Task from './components/Task';
import WebCode from './components/WebCode';
import Capstone from './components/Capstone';
import CapstoneSubmission from './components/CapstoneSubmission';
import PlacementSession from './components/PlacementSession';
import MyQueries from './components/MyQueries';
import Requirement from './components/Requirement';
import PortfolioSubmission from './components/PortfolioSubmission';
import Application from './components/Application';
import InterviewTask from './components/InterviewTask';
import LeaveApplication from './components/LeaveApplication';
import MockInterview from './components/MockInterview';
import Certificate from './components/Certificate';
import Testimonial from './components/Testimonial';
import Leaderboard from './components/Leaderboard';
import Syllabus from './components/Syllabus';
import PlacementBoard from './components/PlacementBoard';
import Login from './components/Login';
import SubmitTask from './components/SubmitTask';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <>
                <Sidebar />
                <div className="page-content">
                  <Routes>
                    <Route path="/" element={<Layout title="Dashboard"><Dashboard /></Layout>} />
                    <Route path="/ClassSchedule" element={<Layout title="Class"><ClassSchedule /></Layout>} />
                    <Route path="/ClassSchedule/day/:dayId" element={<Layout title="Day Detail"><DayDetail /></Layout>} />
                    <Route path="/Task" element={<Layout title="Task"><Task /></Layout>} />                    
                    <Route path="/WebCode" element={<Layout title="WebCode"><WebCode /></Layout>} />
                    <Route path="/Capstone" element={<Layout title="Capstone"><Capstone /></Layout>} />
                    <Route path="/Capstone/Submission" element={<Layout title="Capstone Submission"><CapstoneSubmission /></Layout>} />
                    <Route path="/PlacementSession" element={<Layout title="Placement Session"><PlacementSession /></Layout>} />
                    <Route path="/MyQueries" element={<Layout title="My Queries"><MyQueries /></Layout>} />
                    <Route path="/Requirement" element={<Layout title="Requirement"><Requirement /></Layout>} />
                    <Route path="/PortfolioSubmission" element={<Layout title="Portfolio Submission"><PortfolioSubmission /></Layout>} />
                    <Route path="/Application" element={<Layout title="Application"><Application /></Layout>} />
                    <Route path="/InterviewTask" element={<Layout title="Interview Task"><InterviewTask /></Layout>} />
                    <Route path="/LeaveApplication" element={<Layout title="Leave Application"><LeaveApplication /></Layout>} />
                    <Route path="/MockInterview" element={<Layout title="Mock Interview"><MockInterview /></Layout>} />
                    <Route path="/Certificate" element={<Layout title="Certificate"><Certificate /></Layout>} />
                    <Route path="/Testimonial" element={<Layout title="Testimonial"><Testimonial /></Layout>} />
                    <Route path="/Leaderboard" element={<Layout title="Leaderboard"><Leaderboard /></Layout>} />
                    <Route path="/Syllabus" element={<Layout title="Syllabus"><Syllabus /></Layout>} />
                    <Route path="/PlacementBoard" element={<Layout title="Placement Board"><PlacementBoard /></Layout>} />
                    <Route path="/submit-task" element={<Layout title="Submit Task"><SubmitTask /></Layout>} />
                  </Routes>
                </div>
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

