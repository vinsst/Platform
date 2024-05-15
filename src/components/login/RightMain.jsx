import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

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
        <form className="login__RightMain_inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login__RightMain_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="login__RightMain_input"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last name"
            required
          />
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
          <input
            type="text"
            className="login__RightMain_input"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Telephone"
            required
          />
          <input
            type="email"
            className="login__RightMain_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <button className="login__RightMain_el_sign_up_btn" type="submit">
            <span className="login__RightMain_el_sign_up_btn_txt">Sign Up</span>
          </button>
        </form>
        <Link to="/login" className="login__RightMain_el_have_acc">
          <span className="login__RightMain_el_txt">
            Already have an account? Sign In
          </span>
        </Link>
      </div>
    </div>
  );
}

export default RightMain;
