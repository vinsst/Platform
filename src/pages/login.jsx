import React from "react";

import LeftVideo from "../components/login/LeftVideo";
import RightMainLogin from "../components/login/RightMainLogin";

function login() {
  return (
    <main className="homeMain">
      <LeftVideo />
      <RightMainLogin />
    </main>
  );
}

export default login;
