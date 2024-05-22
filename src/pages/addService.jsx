import React, { useState, useEffect } from "react";

import LeftNav from "../components/services/LeftNav";
import AddRightMain from "../components/login/addservice/AddRightMain";

function AddService() {
  return (
    <main className="homeMain">
      <LeftNav />
      <AddRightMain />
    </main>
  );
}

export default AddService;
