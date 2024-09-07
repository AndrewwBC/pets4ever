import { memo, useState } from "react";
import { Container, Content } from "./styles";
import PostProfilePicture from "./PostProfilePicture";
import ProfileFeed from "./components/ProfileFeed";
import UserStatus from "./components/QuantityOfPostFollowersAndFollowing";

import FollowOrUnfollow from "./components/FollowOrUnfollow";
import { useUser } from "../../../context/userProvider";

const UserProfile = () => {
  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);

  const { user } = useUser();

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
            <div className="userImageAndName">
              <div>
                <img
                  width={120}
                  height={120}
                  src={src}
                  alt="sua foto de perfil"
                  onClick={updateProfileImg}
                />
              </div>

              <span className="username">{user?.username}</span>
            </div>

            <UserStatus
              postQuantity={user?.userPostsAndQuantityOfPosts.quantity}
              followers={user?.followers}
              following={user?.following}
            />

            <FollowOrUnfollow />
          </div>

          <ProfileFeed posts={user.userPostsAndQuantityOfPosts.posts} />
        </Content>
      </Container>
    );
};

export default memo(UserProfile);
