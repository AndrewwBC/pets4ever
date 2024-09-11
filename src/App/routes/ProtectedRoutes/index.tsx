import { Route, Routes } from "react-router-dom";
import Feed from "../../../Pages/auth/Feed";
import Config from "../../../Pages/auth/UserConfig";

import ProtectedRoutesLayout from "../../../Layout/ProtectedRoutesLayout";
import Error404 from "./NotFound";
import { useUser } from "../../../context/UserProvider";
import { hasSession } from "../../../utils/getCookie";
import InitialLoader from "../InitialLoader";
import ProfileWrapper from "../../../Pages/auth/ProfileWrapper";

export default function ProtectedRoutes() {
  const { user } = useUser();

  if (user === null && hasSession) {
    return <InitialLoader />;
  }

  if (user)
    return (
      <Routes>
        <Route path="/" element={<ProtectedRoutesLayout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/config" element={<Config />} />
          <Route path="/:username" element={<ProfileWrapper />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    );
}
