import React, { useState, useEffect } from "react";

import LeftVideo from "../components/login/LeftVideo";
import RightMain from "../components/login/RightMain";

function Login() {
  return (
    <main className="homeMain">
      <LeftVideo />
      <RightMain />
    </main>
  );
}

export default Login;
