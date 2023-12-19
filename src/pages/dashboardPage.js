// DashboardPage.js
import React from 'react';
import DashboardTemplate from '../templates/dashboard';

const DashboardPage = () => (
  <DashboardTemplate onLogout={() => console.log('Logout clicked')}>
    <div>
      <h2>Welcome to Your Dashboard!</h2>
      <p>Here are some example items:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </DashboardTemplate>
);

export default DashboardPage;
