import React, { useRef, useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
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
    <form class="form-signin">
      <h2>Sign In</h2>
      <div class="input-container">
        <label for="signin-username">Username</label>
        <input type="text" id="signin-username" required/>
        <i class="fa-regular fa-user"></i>
      </div>

      <div class="input-container">
        <label for="signin-password">Password</label>
        <input type="password" id="signin-password" required/>
        <i class="fa-solid fa-lock"></i>
      </div>

      <div class="input-container">
        <input type="submit" value={'Login'}/>
      </div>
      <p>Not Registered? <a href="#" class="create">Create</a></p>
    </form>
  );
};

export default Login;
