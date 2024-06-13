import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./pages/services.jsx";
import AddService from "./pages/addService.jsx";
import SignUp from "./pages/signUp.jsx";
import Login from "./pages/login.jsx";
import Restore from "./pages/restore.jsx";
import Footer from "./components/Footer.jsx";
import ViewService from "./pages/viewService.jsx";
import Tasks from "./pages/tasks.jsx";
import Calendar from "./pages/calendar.jsx";
import AddCalendar from "./pages/addCalendar.jsx";

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
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar/add-calendar" element={<AddCalendar />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
