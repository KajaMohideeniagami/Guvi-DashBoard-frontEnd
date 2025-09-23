import React, { useState, useEffect } from 'react';
import './styles/LeaveApplication.css';

const LeaveApplication = () => {
  const [showForm, setShowForm] = useState(false);
  const [days, setDays] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const [leaveRecords, setLeaveRecords] = useState([]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const fetchLeaveRecords = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/leave');
      const data = await response.json();
      setLeaveRecords(data);
    } catch (err) {
      console.error('Error fetching leave records:', err);
    }
  };

  useEffect(() => {
    fetchLeaveRecords();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (days && fromDate && toDate && reason) {
      const newRecord = { days, fromDate, toDate, reason };

      try {
        const response = await fetch('http://localhost:5001/api/leave', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRecord),
        });

        const result = await response.json();

        if (response.ok) {
          setLeaveRecords([...leaveRecords, result.data]);
          setDays('');
          setFromDate('');
          setToDate('');
          setReason('');
          setShowForm(false);
        } else {
          alert(result.error || 'Failed to submit leave request.');
        }
      } catch (error) {
        alert('Server error. Please try again later.');
      }
    } else {
      alert('Please fill out all fields!');
    }
  };

  return (
    <div className="page-container">
      <button onClick={handleToggleForm} className="leave-button">
        {showForm ? 'Cancel' : 'Add Leave Request'}
      </button>

      {showForm && (
        <form className="leave-form" onSubmit={handleSubmit}>
          <label>
            Days:
            <select value={days} onChange={(e) => setDays(e.target.value)}>
              <option value="">Select Days</option>
              <option value="1 Day">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="3 Days">3 Days</option>
              <option value="4 Days">4 Days</option>
              <option value="5 Days">5 Days</option>
            </select>
          </label>

          <label>
            From Date:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>

          <label>
            To Date:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </label>

          <label>
            Reason:
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for leave"
            />
          </label>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <div className="leave-records">
        {leaveRecords.length > 0 ? (
          <table className="leave-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Days</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {leaveRecords.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.days}</td>
                  <td>{record.fromDate}</td>
                  <td>{record.toDate}</td>
                  <td>{record.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No leave records submitted yet.</p>
        )}
      </div>


    </div>
  );
};

export default LeaveApplication;
