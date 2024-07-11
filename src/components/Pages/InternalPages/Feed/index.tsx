import { useEffect, useState } from "react";
import { Container, HeaderAndPhoto } from "./styles";

import { VscHeart, VscComment, VscSend } from "react-icons/vsc";

import PostModal from "../components/PostModal";
import Stories from "./components/Stories";
import { getPosts } from "./api";

export const Feed = () => {
  const [feedPostModal, setFeedPostModal] = useState(false);
  const [modalPost, setModalPost] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    api();
  }, []);

  async function api() {
    const posts = await getPosts();
    setPosts(posts);
  }

  function handlePostModal(postId: string) {
    setFeedPostModal(true);

    setModalPost(posts.find((post) => post.postId === postId));
  }

  if (!posts) return <div></div>;
  else
    return (
      <Container>
        {feedPostModal && (
          <PostModal
            post={modalPost}
            setModalPost={setModalPost}
            setModal={setFeedPostModal}
          />
        )}

        <Stories />
        <HeaderAndPhoto>
          <div className="header">
            <span>Feeds</span>

            <div className="menuHeader">
              <p>Recentes</p>
              <p>Amigos</p>
              <p>Popular</p>
            </div>
          </div>

          <div className="imagesContainer">
            {posts.map(
              (
                {
                  creationDate,
                  description,
                  imageUrl,
                  name,
                  userProfileImageUrl,
                  postId,
                }: any,
                index
              ) => {
                return (
                  <div
                    className="eachPost"
                    key={index}
                    onClick={() => handlePostModal(postId)}
                  >
                    <header className="postHeader">
                      <div>
                        <img
                          src={`https://pets4ever.s3.us-east-2.amazonaws.com/${userProfileImageUrl}`}
                          alt=""
                          height={48}
                          width={48}
                        />
                        <p>{name}</p>
                      </div>
                    </header>
                    <img
                      className="feedPhoto"
                      src={`https://pets4ever.s3.us-east-2.amazonaws.com/${imageUrl}`}
                      alt=""
                    />
                    <div className="userInfo">
                      <div className="iconsContainerAndCreatedAt">
                        <div className="icons">
                          <VscHeart style={{ cursor: "pointer" }} size={26} />
                          <VscComment style={{ cursor: "pointer" }} size={26} />
                          <VscSend style={{ cursor: "pointer" }} size={26} />
                        </div>

                        <div className="createdAt">
                          <small>{creationDate}</small>
                        </div>
                      </div>

                      <div className="nameAndDescription">
                        <p>@{name.toLowerCase()}</p>
                        <small>{description}</small>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </HeaderAndPhoto>
      </Container>
    );
};

export default Feed;
