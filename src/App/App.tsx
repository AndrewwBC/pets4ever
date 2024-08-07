import "../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "../context/GlobalStorage";

import { darkTheme, theme } from "../assets/styles/theme";

import Home from "../Pages/GeneralPages/Home";
import Login from "../Pages/GeneralPages/Login";
import About from "../Pages/GeneralPages/About/index";
import Contact from "../Pages/GeneralPages/Contact";
import ForgotPassword from "../Pages/GeneralPages/ForgotPassword";
import { Register } from "../Pages/GeneralPages/Register";
import UserProfile from "../Pages/InternalPages/UserProfile";
import InsideLayout from "../Pages/InternalPages/InsideLayout";
import Feed from "../Pages/InternalPages/Feed";
import Header from "../components/Layout/Header";
import Error404 from "../Pages/Error404";
import Config from "../Pages/InternalPages/UserConfig";
import { useContext, useEffect } from "react";
import ThemeContextProvider, { ThemeContext } from "../context/ThemeContext";

function AppContent() {
  const { systemTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(systemTheme);
  }, [systemTheme]);

  return (
    <ThemeProvider theme={systemTheme === "light" ? theme : darkTheme}>
      <GlobalStorage>
        <Router>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index path="" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
            </Route>

            <Route path="/" element={<InsideLayout />}>
              <Route index path="/profile/:id" element={<UserProfile />} />
              <Route path="feed" element={<Feed />} />
              <Route path="config" element={<Config />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </GlobalStorage>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
