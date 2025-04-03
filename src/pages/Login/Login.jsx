import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import spinner from "../../assets/spinner4.gif";

const Login = () => {
  const [switchState, setSwitchState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (switchState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  console.log(name, email, password, "sasasa");
  return loading ? (
    <div className="loadin-spinner">
      <img src={spinner}></img>
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo"></img>
      <div className="login-form">
        <h1>{switchState}</h1>

        <form>
          {switchState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            ></input>
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          ></input>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          ></input>
          <button onClick={user_auth} type="submit">
            {switchState}
          </button>
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
              New to Netflix?{" "}
              <span onClick={() => setSwitchState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setSwitchState("Sign In")}>
                {" "}
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
