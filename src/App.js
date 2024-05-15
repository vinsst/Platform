import React from "react";
import { Routes, Route } from "react-router-dom";

import Platform from "./pages/platform.jsx";
import SignUp from "./pages/signUp.jsx";
import Login from "./pages/login.jsx";
import Restore from "./pages/restore.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restore" element={<Restore />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
