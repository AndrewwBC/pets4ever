import { Outlet, useParams } from "react-router-dom";
import { useUser } from "../../../context/UserProvider";
import SectionUser from "./SectionUser";
import OtherUser from "./OtherUser";

export default function ProfileWrapper() {
  const { user } = useUser();
  const params = useParams();

  return user?.username === params.username ? (
    <div>
      <SectionUser user={user!} />
      <Outlet />
    </div>
  ) : (
    <div>
      <OtherUser username={params.username!} />
      <Outlet />
    </div>
  );
}
