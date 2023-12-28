import "../../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "../../context/GlobalStorage";

import { theme } from "../../assets/styles/theme";

import Header from "../Layout/Header";
import Home from "../Pages/Home";
import Footer from "../Layout/Footer";
import Login from "../Pages/Login";
import About from "../Pages/About/index";
import Contact from "../Pages/Contact";
import ForgotPassword from "../Pages/ForgotPassword";
import { Register } from "../Pages/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStorage>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
