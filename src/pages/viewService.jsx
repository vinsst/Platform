import React from "react";

import LeftNav from "../components/leftFullNav/LeftNav";
import RightMain from "../components/services/viewService/RightMain";

function viewService() {
  return (
    <main className="homeMain">
      <LeftNav />
      <RightMain />
    </main>
  );
}

export default viewService;
