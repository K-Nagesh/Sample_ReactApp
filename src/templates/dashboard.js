import React from 'react';
import Header from '../organisms/header';
import './templateStyles.css';

const DashboardTemplate = ({ children, onLogout }) => (
  <div className="dashboard-template">
    <Header title="Dashboard" onLogout={onLogout} />
    <main>{children}</main>
  </div>
);

export default DashboardTemplate;