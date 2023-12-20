import React, { useRef, useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
import "./loginStyles.css";

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
      <div className="content">
        <h1>{"Welcome back"}</h1>

        <div className="toggle">
          <p>{"Don't have an account? Click here →"}</p>
          <BsToggle2Off className="toggle-icon" />
        </div>

        <div className="formContainer">
          <form>
            <input
              type="text"
              placeholder="user name"
              value={userName}
              onChange={userName_Changing}
              className="inputField"
            />
            <br />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={password_Changing}
              ref={passwordRef}
              className="inputField"
            />
            <br />
          </form>
        </div>

        <button className="btn">{"LOG IN"}</button>
      </div>
    </div>
  );
};

export default Login;
