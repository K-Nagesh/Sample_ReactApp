import React, { useRef, useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./signupStyles.css";

const SignUp = () => {
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
    <div class="container">
     <form class="form signup">
      <h2>Sign Up</h2>
      <div class="input-container">
        <label for="signup-username">Username</label>
        <input type="text" id="signup-username" required></input>
          <i class="fa-regular fa-user"></i>
      </div>

      <div class="input-container">
        <label for="signup-email">Email Address</label>
        <input type="text" id="signup-email" required></input>
          <i class="fa-regular fa-enelope"></i>
      </div>

      <div class="input-container">
        <label for="signup-password">Create Password</label>
        <input type="password" id="signup-password" required/>
        <i class='fa-solid fa-lock'></i>
      </div>

      <div class="input-container">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="signup-password" required />
        <i class="fa-solid fa-lock"></i>
      </div>

      <div class='input-container'>
        <input type="submit" value="Create Account"/>
      </div>

      <p>Already a member? <a href="#" class="login">Log in</a></p>
     </form>
    </div>
  );
};

export default SignUp;
