import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutesLayout } from "../../../Layout/PublicLayout";

import Home from "../../../Pages/no-auth/Home";
import AccessDenied from "../ProtectedRoutes/AccessDenied";
import { useUser } from "../../../context/userProvider";

export default function RoutesForPublic() {
  const { user } = useUser();

  const routes = [
    {
      path: "/home",
      element: user ? <Navigate to={"/feed"} /> : <Home />,
    },

    { path: "access-denied", element: <AccessDenied /> },
  ];

  return (
    <Routes>
      <Route path="/" element={<PublicRoutesLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
