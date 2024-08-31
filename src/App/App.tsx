import "../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { darkTheme, theme } from "../assets/styles/theme";
import Home from "../Pages/no-auth/Home";
import Login from "../Pages/no-auth/Login";
import About from "../Pages/no-auth/About/index";
import Contact from "../Pages/no-auth/Contact";
import ForgotPassword from "../Pages/no-auth/ForgotPassword";
import { Register } from "../Pages/no-auth/Register";
import UserProfile from "../Pages/auth/UserProfile";
import InsideLayout from "../Pages/auth/InsideLayout";
import Feed from "../Pages/auth/Feed";
import Header from "../Layout/Header";
import Error404 from "../Pages/404";
import Config from "../Pages/auth/UserConfig";
import ChangeThemeProvider, { useTheme } from "../context/themeProvider";
import AuthProvider from "../context/authProvider";

function AppContent() {
  const { systemTheme } = useTheme();

  return (
    <ThemeProvider theme={systemTheme === "light" ? theme : darkTheme}>
      <AuthProvider>
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
      </AuthProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ChangeThemeProvider>
      <AppContent />
    </ChangeThemeProvider>
  );
}

export default App;
