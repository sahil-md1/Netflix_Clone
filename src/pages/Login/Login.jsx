import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [switchState, setSwitchState] = useState("Sign In");
  console.log(switchState, "sasasa");
  return (
    <div className="login">
      <img src={logo} className="login-logo"></img>
      <div className="login-form">
        <h1>{switchState}</h1>

        <form>
          {switchState === "Sign Up" ? (
            <input type="text" placeholder="Your Name"></input>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button>{switchState}</button>
          <div className="form-help">
            <div className="remeber">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>

        <div className="form-switch">
          {switchState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=> setSwitchState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={()=> setSwitchState('Sign In')}> Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
