import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserDashboard from "./components/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import SignUpComp from "./components/SignUpComp";
import SignUpUser from "./components/SignUpUser";
import SignUp from "./components/SignUp";

// test comment

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
