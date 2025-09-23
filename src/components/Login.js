import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log('36',response);
    
    const data = await response.json();
    console.log('36',data);

    setLoading(false);

    if (!response.ok) {
      throw new Error(data.message || "Invalid username or password");
    }

    // 🔹 Save token and authenticate user
    localStorage.setItem("token", data.token);
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    navigate("/");
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    setError("Invalid username or password. Please try again.");
    setLoading(false);
  }
};


  // ✅ Handle Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, username, password }),
      });
  
      const data = await response.json();
      setLoading(false);
  
      if (!response.ok) {
        throw new Error(data.message || 'Error registering user');
      }
  
      alert('Registration successful! Please log in.');
      setIsSignUp(false);
    } catch (error) {
      console.error('Sign-Up Error:', error.message);
      setError('Failed to connect to the server. Please try again.');
      setLoading(false);
    }
  };
  

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        {isSignUp && (
          <>
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Email ID</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">Processing...</p>}

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login here' : 'Sign up here'}
        </span>
      </p>
    </div>
  );
};

export default Login;


