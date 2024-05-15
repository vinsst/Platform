import React, { useState, useEffect } from "react";

import LeftNav from "../components/services/LeftNav";
import RightMain from "../components/services/RightMain";

function Platform() {
  return (
    <main className="homeMain">
      <LeftNav />
      <RightMain />
    </main>
  );
}

export default Platform;
