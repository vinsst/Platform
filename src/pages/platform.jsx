import React, { useState, useEffect } from "react";

import LeftNav from "../components/LeftNav";
import RightMain from "../components/RightMain";

function Platform() {
  return (
    <main className="homeMain">
      <LeftNav />
      <RightMain />
    </main>
  );
}

export default Platform;
