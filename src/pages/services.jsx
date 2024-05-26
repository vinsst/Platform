import React, { useState, useEffect } from "react";

import LeftNav from "../components/leftFullNav/LeftNav";
import RightMain from "../components/services/myServices/RightMain";

function Services() {
  return (
    <main className="homeMain">
      <LeftNav />
      <RightMain />
    </main>
  );
}

export default Services;
