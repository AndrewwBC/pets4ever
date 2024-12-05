import { Route, Routes } from "react-router-dom";
import Feed from "../../../Pages/auth/Feed";
import Config from "../../../Pages/auth/UserConfig";

import ProtectedRoutesLayout from "../../../Layout/ProtectedRoutesLayout";
import Error404 from "./NotFound";
import { useUser } from "../../../context/UserProvider";
import { hasSession } from "../../../utils/getCookie";
import InitialLoader from "../InitialLoader";
import ProfileWrapper from "../../../Pages/auth/ProfileWrapper";
import CreatePostModal from "../../../Pages/auth/modals/CreatePostModal";
import PostModal from "../../../Pages/auth/modals/PostModal";

export default function ProtectedRoutes() {
  const { user } = useUser();

  if (user === null && hasSession) {
    return <InitialLoader />;
  }

  if (user)
    return (
      <Routes>
        <Route path="/" element={<ProtectedRoutesLayout />}>
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/p/:id" element={<PostModal />} />
            <Route path="/feed/p/:id/edit" element={<PostModal />} />
            <Route path="/feed/p/create" element={<CreatePostModal />} />
          </Route>

          <Route path="/config" element={<Config />}>
            <Route path="/config/p/create" element={<CreatePostModal />} />
          </Route>

          <Route path="/:username" element={<ProfileWrapper />}>
            <Route path="/:username/p/create" element={<CreatePostModal />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    );
}
