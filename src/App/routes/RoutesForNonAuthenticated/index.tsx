import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutesLayout } from "../../../Layout/PublicLayout";
import ForgotPassword from "../../../Pages/no-auth/ForgotPassword";
import Login from "../../../Pages/no-auth/Login";
import { Register } from "../../../Pages/no-auth/Register";
import { useAuth } from "../../../context/authProvider";
import Error404 from "../../../Pages/404";
import AccessDenied from "../ProtectedRoutes/AccessDenied";

export default function RoutesForNonAuthenticated() {
  const { state } = useAuth();

  const routes = [
    { path: "/", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "forgotpassword", element: <ForgotPassword /> },
    { path: "*", element: <Error404 /> },
    {
      path: "/profile/:id",
      element: <AccessDenied />,
    },
    {
      path: "/",
      element: <AccessDenied />,
    },
    {
      path: "/config",
      element: <AccessDenied />,
    },
  ];

  if (!state.token)
    return (
      <Routes>
        <Route path="/" element={<PublicRoutesLayout />}>
          {routes.map(({ path, element }) => (
            <Route
              path={path}
              element={state.token ? <Navigate to="/feed" /> : element}
            />
          ))}
        </Route>
      </Routes>
    );
}
