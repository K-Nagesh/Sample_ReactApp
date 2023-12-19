import React from 'react';
import './organStyles.css';
import Button from '../atoms/button';

const Header = ({ title, onLogout }) => (
  <header className="header">
    <h1>{title}</h1>
    <Button label="Logout" onClick={onLogout} />
  </header>
);

export default Header;