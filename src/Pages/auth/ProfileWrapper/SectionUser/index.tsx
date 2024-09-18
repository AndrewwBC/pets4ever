import { memo, useState } from "react";
import { Container, Content } from "../../ProfileWrapper/styles";

import PostProfilePicture from "../components/PostProfilePicture";
import QuantityOfPostFollowersAndFollowing from "../components/QuantityOfPostFollowersAndFollowing";
import ProfileFeed from "../components/ProfileFeed";
import { UserProps } from "../../../../types/user";

interface Props {
  user: UserProps;
}

const UserProfile = ({ user }: Props) => {
  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);

  function updateProfileImg() {
    setPostProfilePictureModal(!postProfilePictureModal);
  }

  const src = user?.profileImgUrl
    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${user?.profileImgUrl}`
    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

  if (user)
    return (
      <Container>
        {postProfilePictureModal && (
          <PostProfilePicture setModal={setPostProfilePictureModal} />
        )}

        <Content>
          <div className="userContent">
            <div className="user">
              <div className="usernameAndProfileImg">
                <img
                  width={120}
                  height={120}
                  src={src}
                  alt="sua foto de perfil"
                  onClick={updateProfileImg}
                />
                <span className="username">{user?.username}</span>
              </div>

              <div className="numbersAndButton">
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
