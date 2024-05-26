import React, { useState, useEffect } from "react";

import LeftNav from "../components/leftFullNav/LeftNav";
import AddRightMain from "../components/services/addservice/AddRightMain";

function AddService() {
  return (
    <main className="homeMain">
      <LeftNav />
      <AddRightMain />
    </main>
  );
}

export default AddService;
