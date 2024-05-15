import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import logo from "../../assets/img/logo.svg";

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
        <form className="login__RightMain_inputs" onSubmit={handleSubmit}>
          <input
            type="email"
            className="login__RightMain_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <button className="login__RightMain_el_sign_up_btn" type="submit">
            <span className="login__RightMain_el_sign_up_btn_txt">
              Send Password
            </span>
          </button>
        </form>
        <Link to="/login" className="login__RightMain_el_have_acc">
          <span className="login__RightMain_el_txt">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default RightMain;
