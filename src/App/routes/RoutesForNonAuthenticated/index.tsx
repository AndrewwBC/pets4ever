import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutesLayout } from "../../../Layout/PublicLayout";
import ForgotPassword from "../../../Pages/no-auth/ForgotPassword";
import Login from "../../../Pages/no-auth/Login";
import { Register } from "../../../Pages/no-auth/Register";
import Error404 from "../../../Pages/404";
import AccessDenied from "../ProtectedRoutes/AccessDenied";
import { useUser } from "../../../context/UserProvider";
import { hasSession } from "../../../utils/getCookie";
import InitialLoader from "../InitialLoader";
import ChangePassword from "../../../Pages/no-auth/ChangePassword";

export default function RoutesForNonAuthenticated() {
  const { user } = useUser();

  const routes = [
    { path: "/", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "forgotpassword", element: <ForgotPassword /> },
    { path: "changepassword", element: <ChangePassword /> },
    { path: "*", element: <Error404 /> },
    {
      path: "/:id",
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

  if (user === null && hasSession) {
    return <InitialLoader />;
  }

  if (!user)
    return (
      <Routes>
        <Route path="/" element={<PublicRoutesLayout />}>
          {routes.map(({ path, element }) => (
            <Route
              path={path}
              element={user ? <Navigate to="/feed" /> : element}
            />
          ))}
        </Route>
      </Routes>
    );
}
