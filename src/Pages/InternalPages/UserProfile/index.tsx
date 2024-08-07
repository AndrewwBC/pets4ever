import { memo, useEffect, useState } from "react";
import { Container, Content } from "./styles";
import axios, { AxiosError } from "axios";
import PostProfilePicture from "./PostProfilePicture";
import ProfileFeed from "./components/ProfileFeed";
import { PostProps } from "./components/ProfileFeed/types";
import UserStatus from "./components/UserStats";
import { useParams } from "react-router-dom";
import { FullDogLoader } from "../../../components/FullDogLoader";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[] | undefined>();
  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);
  const [usernameAndImg, setUsernameAndImg] = useState({
    username: "",
    profileImg: "",
  });

  const { id } = useParams();

  useEffect(() => {
    console.log("montou", id);
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
      setIsLoading(true);
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
        setUsernameAndImg({
          username: request.data.username,
          profileImg: request.data.userImageProfileUrl,
        });
        setPosts(request.data.posts);
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

  const src = usernameAndImg.profileImg
    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${usernameAndImg.profileImg}`
    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

  if (isLoading) return <FullDogLoader />;
  else
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

              <span className="username">{usernameAndImg.username}</span>
            </div>

            <UserStatus />
          </div>

          <ProfileFeed posts={posts}></ProfileFeed>
        </Content>
      </Container>
    );
};

export default memo(UserProfile);
