import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/MyQueries.css';

const MyQueries = () => {
  const [showForm, setShowForm] = useState(false);
  const [problem, setProblem] = useState('');
  const [availability, setAvailability] = useState('');
  const [queries, setQueries] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  // Fetch queries from the backend
  useEffect(() => {
    axios.get(`${API_URL}/queries`)
      .then(response => setQueries(response.data))
      .catch(error => console.error('Error fetching queries:', error));
  }, [API_URL]);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleProblemChange = (e) => setProblem(e.target.value);
  const handleAvailabilityChange = (e) => setAvailability(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuery = { problem, availability };

    axios.post(`${API_URL}/queries`, newQuery)
      .then(response => {
        setQueries([...queries, response.data]);
        setProblem('');
        setAvailability('');
        setShowForm(false);
      })
      .catch(error => console.error('Error submitting query:', error));
  };

  return (
    <div className="queries-container">
      <h2>My Queries</h2>
      <button onClick={handleClick} className="query-button">
        {showForm ? 'Hide Form' : 'Add Query'}
      </button>

      {showForm && (
        <form className="query-form" onSubmit={handleSubmit}>
          <label>
            What is your problem?
            <input
              type="text"
              value={problem}
              onChange={handleProblemChange}
              placeholder="Describe your issue"
              required
            />
          </label>
          <label>
            Availability time
            <input
              type="datetime-local"
              value={availability}
              onChange={handleAvailabilityChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Submit Query
          </button>
        </form>
      )}

      <div className="queries-list">
        <h3>Your Queries</h3>
        {queries.length === 0 ? (
          <p>No queries submitted yet.</p>
        ) : (
          <table className="queries-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Problem</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr key={query._id}>
                  <td>{index + 1}</td>
                  <td>{query.problem}</td>
                  <td>{new Date(query.availability).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
