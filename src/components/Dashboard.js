import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import './Dashboard.css';

const codekataData = [
  { day: 'Mon', points: 100 },
  { day: 'Tue', points: 200 },
  { day: 'Wed', points: 150 },
  { day: 'Thu', points: 180 },
  { day: 'Fri', points: 300 },
  { day: 'Sat', points: 80 },
  { day: 'Sun', points: 0 },
];

const webkataData = [
  { day: 'Mon', points: 50 },
  { day: 'Tue', points: 90 },
  { day: 'Wed', points: 70 },
  { day: 'Thu', points: 60 },
  { day: 'Fri', points: 200 },
  { day: 'Sat', points: 20 },
  { day: 'Sun', points: 0 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Activities</h2>
      <div className="activity-cards">
        {/* Codekata */}
        <div className="activity-card">
          <div className="card-header">
            <h3>Codekata</h3>
            <div className="info-panel">
              <p><strong>Today:</strong> 0</p>
              <p><strong>Total:</strong> 1010</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={codekataData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#4b0082" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Webkata */}
        <div className="activity-card">
          <div className="card-header">
            <h3>Webkata</h3>
            <div className="info-panel">
              <p><strong>Today:</strong> 0</p>
              <p><strong>Total:</strong> 630</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={webkataData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
