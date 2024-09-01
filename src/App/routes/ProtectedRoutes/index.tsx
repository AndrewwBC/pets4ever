import { Route, Routes, Navigate } from "react-router-dom";
import Feed from "../../../Pages/auth/Feed";
import Config from "../../../Pages/auth/UserConfig";
import UserProfile from "../../../Pages/auth/UserProfile";
import { useAuth } from "../../../context/authProvider";

import ProtectedRoutesLayout from "../../../Layout/ProtectedRoutesLayout";
import Error404 from "../../../Pages/404";

export default function ProtectedRoutes() {
  const { state } = useAuth();

  const protectedRoutes = [
    {
      path: "/profile/:id",
      element: <UserProfile />,
    },
    {
      path: "/",
      element: <Feed />,
    },
    {
      path: "/config",
      element: <Config />,
    },
  ];
  console.log(state);
  if (state.token)
    return (
      <Routes>
        <Route
          path="/"
          element={
            state.token ? (
              <ProtectedRoutesLayout />
            ) : (
              <Navigate to="/access-denied" />
            )
          }
        >
          <Route path="*" element={<Error404 />} />
          {state.token ? (
            protectedRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))
          ) : (
            <Route path="*" element={<Navigate to="/access-denied" />} />
          )}
        </Route>
      </Routes>
    );
}
