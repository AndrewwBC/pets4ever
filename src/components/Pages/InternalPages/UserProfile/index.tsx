import { memo, useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import axios, { AxiosError } from "axios";
import { GlobalContext } from "../../../../context/GlobalStorage";
import PostProfilePicture from "./PostProfilePicture";
import ProfileFeed from "./components/ProfileFeed";
import { ProfileFeedProps } from "./components/ProfileFeed/types";
import UserStatus from "./components/UserStats";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ProfileFeedProps[] | undefined>();
  const [postProfilePictureModal, setPostProfilePictureModal] = useState(false);
  const { data, setData } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, [id]);

  async function getUserData() {
    const token = localStorage.getItem("token");
    const storageId = localStorage.getItem("userId");

    const userId = id == storageId ? storageId : id;

    if (!token) {
      return "Token não encontrado";
    }

    try {
      const request = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/user/profile/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (request) {
        setPosts(request.data.posts);
        setData({
          name: request.data.username,
          email: request.data.email,
          profileImg: request.data.imageProfileUrl,
        });
        return;
      }
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

  if (isLoading)
    return (
      <Container>
        <h1>Loading</h1>
      </Container>
    );
  else
    return (
      <Container>
        {postProfilePictureModal && (
          <PostProfilePicture
            setModal={setPostProfilePictureModal}
            isActive={postProfilePictureModal}
          />
        )}

        <div className="userContent">
          <div className="userImageAndName">
            <div>
              <img
                width={64}
                height={64}
                src={`https://pets4ever.s3.us-east-2.amazonaws.com/${data.profileImg}`}
                alt="sua foto de perfil"
                onClick={updateProfileImg}
              />
            </div>

            <h1>{data.name}</h1>
          </div>

          <UserStatus />
        </div>

        <ProfileFeed posts={posts}></ProfileFeed>
      </Container>
    );
};

export default UserProfile;
