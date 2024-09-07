import { Route, Routes, Navigate } from "react-router-dom";
import Feed from "../../../Pages/auth/Feed";
import Config from "../../../Pages/auth/UserConfig";
import UserProfile from "../../../Pages/auth/UserProfile";

import ProtectedRoutesLayout from "../../../Layout/ProtectedRoutesLayout";
import Error404 from "../../../Pages/404";
import { useUser } from "../../../context/userProvider";

export default function ProtectedRoutes() {
  const { user } = useUser();

  const protectedRoutes = [
    {
      path: "/:username",
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
  console.log(user);
  if (user)
    return (
      <Routes>
        <Route
          path="/"
          element={
            user ? <ProtectedRoutesLayout /> : <Navigate to="/access-denied" />
          }
        >
          <Route path="*" element={<Error404 />} />
          {user ? (
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
