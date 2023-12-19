import React from 'react';
import './moleculeStyle.css';
import Input from '../atoms/input';
import Button from '../atoms/button';

const LoginForm = ({ onSubmit }) => (
  <form className="login-form" onSubmit={onSubmit}>
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <Button label="Login" type="submit" />
  </form>
);

export default LoginForm;