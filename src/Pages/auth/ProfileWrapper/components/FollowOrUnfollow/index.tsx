import USER_API from "../../../../../api/user/USER_API";
import { PurpleButton } from "../../../../../components/purpleButton";
import { useUser } from "../../../../../context/UserProvider";
import { FollowersProps } from "../../../../../types/user";

interface FollowOrUnfollow {
  getData: () => Promise<void>;
  usernameOfUserToBeFollowed: string;
  userFollowersList: FollowersProps;
}

function FollowOrUnfollow({
  usernameOfUserToBeFollowed,
  getData,
  userFollowersList,
}: FollowOrUnfollow) {
  const { user } = useUser();

  async function handleFollowOrUnfollow() {
    const data = {
      actionUserUsername: user?.username,
      usernameOfUserToBeFollowed,
    };

    try {
      const response = await USER_API.following(data);
      if (response) {
        getData();
      }
    } catch (err) {}
  }

  const userAlreadyFollowed = userFollowersList.followersList.find(
    (item) => item.username === user?.username
  );

  return (
    <PurpleButton onClick={handleFollowOrUnfollow}>
      {userAlreadyFollowed ? <span>Seguindo</span> : <span>Seguir</span>}
    </PurpleButton>
  );
}

export default FollowOrUnfollow;
