import { memo, useCallback, useEffect, useState } from "react";
import { Container, Content } from "../../ProfileWrapper/styles";

import QuantityOfPostFollowersAndFollowing from "../components/QuantityOfPostFollowersAndFollowing";
import FollowOrUnfollow from "../components/FollowOrUnfollow";
import ProfileFeed from "../components/ProfileFeed";
import USER_API from "../../../../api/user/USER_API";
import { UserProps } from "../../../../types/user";

interface OtherUserProps {
  username: string;
}

function OtherUser({ username }: OtherUserProps) {
  const [user, setUser] = useState<UserProps>();

  const getData = useCallback(async () => {
    const data = await USER_API.getOtherUser(username);
    if (data) setUser(data);
  }, [username]);

  useEffect(() => {
    getData();
  }, [username, getData]);

  const src = user?.profileImgUrl
    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${user?.profileImgUrl}`
    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

  if (user)
    return (
      <Container>
        <Content>
          <div className="userContent">
            <div className="user">
              <div className="usernameAndProfileImg">
                <img
                  width={120}
                  height={120}
                  src={src}
                  alt="imagem de perfil"
                />
                <span className="username">{user?.username}</span>
              </div>

              <div className="numbersAndButton">
                <QuantityOfPostFollowersAndFollowing
                  postQuantity={user?.userPostsAndQuantityOfPosts.quantity}
                  followers={user?.followers}
                  following={user?.following}
                />
                <FollowOrUnfollow
                  getData={getData}
                  usernameOfUserToBeFollowed={user.username}
                  userFollowersList={user.followers}
                />
              </div>
            </div>
          </div>

          <ProfileFeed posts={user.userPostsAndQuantityOfPosts.posts} />
        </Content>
      </Container>
    );
}

export default memo(OtherUser);
