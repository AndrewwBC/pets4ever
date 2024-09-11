import USER_API from "../../../../../api/user/USER_API";
import { PurpleButton } from "./styles";

function FollowOrUnfollow({ userId }: any) {
  async function handleFollowOrUnfollow() {
    try {
      await USER_API.following(userId);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PurpleButton onClick={handleFollowOrUnfollow}>
      <span>Seguir</span>
    </PurpleButton>
  );
}

export default FollowOrUnfollow;
