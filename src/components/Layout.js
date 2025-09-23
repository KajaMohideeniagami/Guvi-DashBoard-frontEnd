import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Layout.css';

const Layout = ({ title, children }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated'); // Clear auth status
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="layout">
      <header className="header">
        <h2>{title}</h2>
        <button className="signout-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
