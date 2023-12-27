import React, { useRef, useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../signUp/signupStyles.css";

const Login = () => {
  const [userName, setUserName] = useState("");

  const passwordRef = useRef(null);
  const [password, setPassword] = useState(null);

  const userName_Changing = (event) => {
    const text = event.target.value;
    setUserName(text);
  };

  const password_Changing = () => {
    const text = passwordRef.current.value;
    console.log("text", text);
    setPassword(text);
  };

  return (

    <div className="container">
    <form className="form-signin">
      <h2>Sign In</h2>
      <div className="input-container">
        <label for="signin-username">Username</label>
        <input type="text" id="signin-username" required/>
        <i className="fa-regular fa-user"></i>
      </div>

      <div className="input-container">
        <label for="signin-password">Password</label>
        <input type="password" id="signin-password" required/>
        <i className="fa-solid fa-lock"></i>
      </div>

      <div className="input-container">
        <input type="submit" value={'Login'}/>
      </div>
      <p>Not Registered? <a href="#" className="create">Create</a></p>
    </form>
    </div>

  );
};

export default Login;
