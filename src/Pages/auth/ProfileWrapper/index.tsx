import { useParams } from "react-router-dom";
import { useUser } from "../../../context/UserProvider";
import SectionUser from "./SectionUser";
import OtherUser from "./OtherUser";

export default function ProfileWrapper() {
  const { user } = useUser();
  const params = useParams();

  user?.username === params.username ? (
    <SectionUser user={user!} />
  ) : (
    <OtherUser username={params.username!} />
  );
}
