import { memo, useCallback, useEffect, useState } from "react";
import { Container, Content } from "../../ProfileWrapper/styles";

import QuantityOfPostFollowersAndFollowing from "../components/QuantityOfPostFollowersAndFollowing";
import FollowOrUnfollow from "../components/FollowOrUnfollow";
import ProfileFeed from "../components/ProfileFeed";
import USER_API from "../../../../api/user/USER_API";
import { UserProps } from "../../../../types/user";
import { FollowButtonAndNumbers, FullnameNumbersAndButton } from "./styles";
import UsernameAndProfileImg from "../components/UsernameAndProfileImg";
import FullnameAndButtonToEditProfile from "../components/FullnameAndButtonToEditProfile";

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

  if (user)
    return (
      <Container>
        <Content>
          <Content>
            <div className="userContent">
              <div className="user">
                <UsernameAndProfileImg
                  profileImgUrl={user.profileImgUrl}
                  username={user.username}
                />
                <div className="userData">
                  <div className="fullnameAndNumbers">
                    <QuantityOfPostFollowersAndFollowing
                      postQuantity={user?.userPostsAndQuantityOfPosts.quantity}
                      followers={user?.followers}
                      following={user?.following}
                    />
                    <FullnameAndButtonToEditProfile fullname={user.fullname} />
                  </div>
                  {user.bio && (
                    <div className="bio">
                      <div className="textContainer">
                        <p>{user.bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <ProfileFeed posts={user.userPostsAndQuantityOfPosts.posts} />
          </Content>
        </Content>
      </Container>
    );
}

export default memo(OtherUser);
