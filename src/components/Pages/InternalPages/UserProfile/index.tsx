import { useContext, useEffect, useState } from "react";
import { Container, ProfileFeed } from "./styles";
import axios, { AxiosError } from "axios";
import { GlobalContext } from "../../../../context/GlobalStorage";
import PostProfilePicture from "./PostProfilePicture";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [postProfilePictureModal, setPostProfilePictureModal] = useState(false);

  const { data, setData } = useContext(GlobalContext);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const token = localStorage.getItem("token");

    if (!token) {
      return "Token não encontrado";
    }

    try {
      const request = await axios.get("http://localhost:8080/auth/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (request) {
        console.log(request.data);
        setPosts(request.data.posts);
        setData({
          name: request.data.username,
          email: request.data.email,
          profileImg: request.data.profileImageUrl,
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.message);
        console.log(error.message);
        return error;
      }
    } finally {
      setIsLoading(false);
    }
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
        {postProfilePictureModal && <PostProfilePicture />}

        <div className="userContent">
          <div className="userImageAndName">
            <div>
              <img
                width={64}
                height={64}
                src={`https://pets4ever.s3.us-east-2.amazonaws.com/${data.profileImg}`}
                alt="sua foto de perfil"
              />
            </div>

            <h1>{data.name}</h1>
          </div>

          <div className="userStats">
            <div>
              <p>0</p>
              <small>Posts</small>
            </div>

            <div>
              <p>0</p>
              <small>Seguindo</small>
            </div>

            <div>
              <p>0</p>
              <small>Seguidores</small>
            </div>
          </div>
        </div>

        <ProfileFeed>
          <div className="profileFeedContent">
            {posts.map(
              (
                { creationDate, description, imageUrl, name, postId }: any,
                index
              ) => {
                return (
                  <div key={index} onClick={() => handlePostModal(postId)}>
                    <img
                      className="feedPhoto"
                      src={`https://pets4ever.s3.us-east-2.amazonaws.com/${imageUrl}`}
                      alt=""
                    />
                  </div>
                );
              }
            )}
          </div>
        </ProfileFeed>
      </Container>
    );
};

export default UserProfile;
