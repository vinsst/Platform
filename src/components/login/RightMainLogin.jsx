import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

function RightMainLogin() {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        // /api/login
        {
          password,
          login,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login_RightMain">
      <div className="login__RightMain_content">
        <img
          src={logo}
          alt=""
          className="login__RightMain_el_logo login__RightMain_el"
          width="100px"
        />
        <span className="login__RightMain_welcome">Login</span>
        <form className="login__RightMain_inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login__RightMain_input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            required
          />
          <input
            type="password"
            className="login__RightMain_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="login__RightMain_el_sign_up_btn" type="submit">
            <span className="login__RightMain_el_sign_up_btn_txt">Sign In</span>
          </button>
        </form>
        <Link to="/restore" className="login__RightMain_el_forgotpass">
          <span className="login__RightMain_el_forgotpass_txt">
            Forgot Password
          </span>
        </Link>
        <Link to="/signup" className="login__RightMain_el_have_acc">
          <span className="login__RightMain_el_txt">
            Don't have an account yet? Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
}

export default RightMainLogin;
