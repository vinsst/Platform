import React from "react";
import { Link } from "react-router-dom";

function LoginForm({ inputs, buttonText, onSubmit, additionalLinks }) {
  return (
    <form className="login__RightMain_inputs" onSubmit={onSubmit}>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          className="login__RightMain_input"
          value={input.value}
          onChange={input.onChange}
          placeholder={input.placeholder}
          required={input.required}
        />
      ))}
      <button className="login__RightMain_el_sign_up_btn" type="submit">
        <span className="login__RightMain_el_sign_up_btn_txt">
          {buttonText}
        </span>
      </button>
      {additionalLinks.map((link, index) => (
        <Link key={index} to={link.to} className={link.className}>
          <span className={link.spanClassName}>{link.text}</span>
        </Link>
      ))}
    </form>
  );
}

export default LoginForm;
