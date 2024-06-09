import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./pages/services.jsx";
import AddService from "./pages/addService.jsx";
import SignUp from "./pages/signUp.jsx";
import Login from "./pages/login.jsx";
import Restore from "./pages/restore.jsx";
import Footer from "./components/Footer.jsx";
import ViewService from "./pages/viewService.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/my-services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restore" element={<Restore />} />
          <Route path="/my-services/add-service" element={<AddService />} />
          <Route path="/my-services/view-service" element={<ViewService />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
