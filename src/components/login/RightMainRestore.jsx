import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import logo from "../../assets/img/logo.svg";

import LoginForm from "./LoginForm";

function RightMain() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        // /api/restore
        {
          email,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const inputs = [
    {
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "E-mail",
      required: true,
    },
  ];

  const additionalLinks = [
    {
      to: "/login",
      className: "login__RightMain_el_have_acc",
      spanClassName: "login__RightMain_el_txt",
      text: "Login",
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
        <span className="login__RightMain_welcome">Restore Password</span>
        <span className="login__RightMain_email_send_txt">
          We will send new password to your email
        </span>
        <LoginForm
          inputs={inputs}
          buttonText="Send Password"
          onSubmit={handleSubmit}
          additionalLinks={additionalLinks}
        />
      </div>
    </div>
  );
}

export default RightMain;
