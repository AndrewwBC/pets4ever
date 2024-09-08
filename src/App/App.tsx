import "../assets/styles/default.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme, theme } from "../assets/styles/theme";
import ChangeThemeProvider, { useTheme } from "../context/MyThemeProvider";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesForNonAuthenticated from "./routes/RoutesForNonAuthenticated";
import UserProvider from "../context/UserProvider";

function AppContent() {
  const { systemTheme } = useTheme();

  return (
    <ThemeProvider theme={systemTheme === "light" ? theme : darkTheme}>
      <Router>
        <RoutesForNonAuthenticated />
        <ProtectedRoutes />
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ChangeThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ChangeThemeProvider>
  );
}

export default App;
