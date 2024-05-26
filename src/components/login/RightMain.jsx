import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import LoginForm from "./LoginForm";

function RightMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        // /api/signup
        {
          email,
          password,
          name,
          lastname,
          login,
          telephone,
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
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Name",
      required: true,
    },
    {
      type: "text",
      value: lastname,
      onChange: (e) => setLastname(e.target.value),
      placeholder: "Last name",
      required: true,
    },
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
    {
      type: "text",
      value: telephone,
      onChange: (e) => setTelephone(e.target.value),
      placeholder: "Telephone",
      required: true,
    },
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
      text: "Already have an account? Sign In",
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
        <span className="login__RightMain_welcome">Welcome!</span>
        <LoginForm
          inputs={inputs}
          buttonText="Sign Up"
          onSubmit={handleSubmit}
          additionalLinks={additionalLinks}
        />
      </div>
    </div>
  );
}

export default RightMain;
