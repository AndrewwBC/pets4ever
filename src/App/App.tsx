import "../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme, theme } from "../assets/styles/theme";
import ChangeThemeProvider, { useTheme } from "../context/themeProvider";
import AuthProvider from "../context/authProvider";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesForPublic from "./routes/RoutesForPublic";
import RoutesForNonAuthenticated from "./routes/RoutesForNonAuthenticated";

function AppContent() {
  const { systemTheme } = useTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={systemTheme === "light" ? theme : darkTheme}>
        <Router>
          <RoutesForPublic />
          <RoutesForNonAuthenticated />
          <ProtectedRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
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
