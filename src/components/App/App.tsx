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
          </Routes>
        </Router>
        {/* <Footer /> */}
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
