import React from "react";
import LoginImage from "../assets/imgs/loginPage.png";

let email = "";
let password = "";

const Login = () => {
  const getEmail = (el) => {
    email = el.value;
  };
  const getPassword = (el) => {
    password = el.value;
  };

  return (
    <div className="container">
      <div className="flex-box">
        <div className="m-auto">
          <div>
            <label>Email address</label>
            <input
              type="email"
              onchanage="getEmail(this)"
              placeholder="enter your email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onchanage="getPassword(this)"
              placeholder="min 8 chars"
            />
          </div>
          <div>
            <input type="checkbox" />I agree to the{" "}
            <a href="">Terms & Privacy</a>
          </div>
          <div>
            <button className="effect" onclick="submit()">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="flex-box">
        <img src={LoginImage} />
      </div>
    </div>
  );
};

export default Login;
