import { memo } from "react";
import { Container, Content } from "../../ProfileWrapper/styles";
import QuantityOfPostFollowersAndFollowing from "../components/QuantityOfPostFollowersAndFollowing";
import ProfileFeed from "../components/ProfileFeed";
import { UserProps } from "../../../../types/user";
import UsernameAndProfileImg from "../components/UsernameAndProfileImg";
import FullnameAndButtonToEditProfile from "../components/FullnameAndButtonToEditProfile";

interface Props {
  user: UserProps;
}

const UserProfile = ({ user }: Props) => {
  if (user)
    return (
      <Container>
        <Content>
          <div className="userContent">
            <div className="user">
              <UsernameAndProfileImg
                profileImgUrl={user.profileImgUrl}
                username={user.username}
              />

              <div className="fullnameAndNumbers">
                <FullnameAndButtonToEditProfile fullname={user.fullname} />
                <QuantityOfPostFollowersAndFollowing
                  postQuantity={user?.userPostsAndQuantityOfPosts.quantity}
                  followers={user?.followers}
                  following={user?.following}
                />
              </div>
            </div>
          </div>

          <ProfileFeed posts={user.userPostsAndQuantityOfPosts.posts} />
        </Content>
      </Container>
    );
};

export default memo(UserProfile);
