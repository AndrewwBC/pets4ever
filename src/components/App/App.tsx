import "../../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "../../context/GlobalStorage";

import { theme } from "../../assets/styles/theme";

import Header from "../Layout/Header";
import Home from "../Pages/GeneralPages/Home";
import Login from "../Pages/GeneralPages/Login";
import About from "../Pages/GeneralPages/About/index";
import Contact from "../Pages/GeneralPages/Contact";
import ForgotPassword from "../Pages/GeneralPages/ForgotPassword";
import { Register } from "../Pages/GeneralPages/Register";
import UserProfile from "../Pages/InternalPages/UserProfile";
import InsideLayout from "../Pages/InternalPages/InsideLayout";
import Feed from "../Pages/InternalPages/Feed";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStorage>
        <Router>
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            <Route path="/me" element={<InsideLayout />}>
              <Route index element={<UserProfile />} />
              <Route path="feed" element={<Feed />} />
            </Route>
          </Routes>
        </Router>
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
