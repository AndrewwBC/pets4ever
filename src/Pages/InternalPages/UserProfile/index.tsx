import { memo, useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { AxiosError } from "axios";
import PostProfilePicture from "./PostProfilePicture";
import ProfileFeed from "./components/ProfileFeed";
import UserStatus from "./components/QuantityOfPostFollowersAndFollowing";
import { useParams } from "react-router-dom";
import { FullDogLoader } from "../../../components/FullDogLoader";
import userApi from "../../../apis/user/userApi";
import { ProfileResponse } from "../../../apis/user/types/profileResponse";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileResponse>();
  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);

  const { id } = useParams();
  useEffect(() => {
    getUserData();
  }, [id]);

  async function getUserData() {
    try {
      setIsLoading(true);
      const data = await userApi.profile(id!);

      setProfileData(data);

      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        return error;
      }
    } finally {
      setIsLoading(false);
    }
  }

  function updateProfileImg() {
    setPostProfilePictureModal(!postProfilePictureModal);
  }

  const src = profileData?.userImageProfileUrl
    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${profileData?.userImageProfileUrl}`
    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

  if (isLoading) return <FullDogLoader />;

  if (profileData)
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
                  width={64}
                  height={64}
                  src={src}
                  alt="sua foto de perfil"
                  onClick={updateProfileImg}
                />
              </div>

              <span className="username">{profileData?.username}</span>
            </div>

            <UserStatus
              postQuantity={profileData?.userPostsAndQuantityOfPosts.quantity}
              followers={profileData?.followers}
              following={profileData?.following}
            />
          </div>

          <ProfileFeed
            posts={profileData?.userPostsAndQuantityOfPosts.posts}
          ></ProfileFeed>
        </Content>
      </Container>
    );
};

export default memo(UserProfile);
