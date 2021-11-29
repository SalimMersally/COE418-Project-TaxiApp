import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import SignUpComp from "./components/SignUpComp";
import SignUpUser from "./components/SignUpUser";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUpCompany" element={<SignUpComp />} />
          <Route path="/SignUpUser" element={<SignUpUser />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
