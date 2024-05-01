import React from "react";
import { Routes, Route } from "react-router-dom";

import Platform from "./pages/platform.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Platform />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
