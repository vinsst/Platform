import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import LoginForm from "./LoginForm";

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

  const inputs = [
    {
      type: "text",
      value: login,
      onChange: (e) => setLogin(e.target.value),
      placeholder: "Login",
      required: true,
    },
    {
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "Password",
      required: true,
    },
  ];

  const additionalLinks = [
    {
      to: "/restore",
      className: "login__RightMain_el_forgotpass",
      spanClassName: "login__RightMain_el_forgotpass_txt",
      text: "Forgot Password",
    },
    {
      to: "/signup",
      className: "login__RightMain_el_have_acc",
      spanClassName: "login__RightMain_el_txt",
      text: "Don't have an account yet? Sign Up",
    },
  ];

  return (
    <div className="login_RightMain">
      <div className="login__RightMain_content">
        <img
          src={logo}
          alt=""
          className="login__RightMain_el_logo"
          width="100px"
        />
        <span className="login__RightMain_welcome">Login</span>
        <LoginForm
          inputs={inputs}
          buttonText="Sign In"
          onSubmit={handleSubmit}
          additionalLinks={additionalLinks}
        />
      </div>
    </div>
  );
}

export default RightMainLogin;
