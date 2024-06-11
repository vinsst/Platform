import React from "react";

import LeftNav from "../components/LeftHalfNav/LeftNav";
import RightMain from "../components/tasks/RightMain";

function Tasks() {
  return (
    <main className="homeMain">
      <LeftNav />
      <RightMain />
    </main>
  );
}

export default Tasks;
