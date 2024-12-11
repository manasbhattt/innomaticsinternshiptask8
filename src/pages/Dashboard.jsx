import React from 'react';

const Dashboard = ({ students }) => {
  const totalStudents = students.length;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <h4>Total Students: {totalStudents}</h4>
    </div>
  );
};

export default Dashboard;
