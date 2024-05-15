import React from "react";

import LeftVideo from "../components/login/LeftVideo";
import RightMainRestore from "../components/login/RightMainRestore";

function restore() {
  return (
    <main className="homeMain">
      <LeftVideo />
      <RightMainRestore />
    </main>
  );
}

export default restore;
