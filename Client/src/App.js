import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from "./StateProvider";

// Components
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import SignUpComp from "./components/SignUpComp";
import SignUpUser from "./components/SignUpUser";
import SignUp from "./components/SignUp";
import CompanyDashboard from "./components/CompanyDashboard";

function App() {
  const [state] = useContext(AppContext);
  const [isCompany, setIsCompany] = useState(false);

  useEffect(() => {
    setIsCompany(state.isCompany);
  }, [state]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/dashboard"
            element={isCompany ? <CompanyDashboard /> : <UserDashboard />}
          />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/Company" element={<SignUpComp />} />
          <Route path="/signUp/User" element={<SignUpUser />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
