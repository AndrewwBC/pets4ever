import { useCallback, useEffect, useState } from "react";
import { Container, HeaderAndPhoto } from "./styles";

import PostModal from "../components/PostModal";
import Stories from "./components/Stories";
import { getPosts } from "./api";
import { updateLikeInPost } from "./api/likePost";
import IconsToLikeCommentAndShare from "./components/IconsToLikeCommentAndShare";
import { spread } from "axios";
import QuantityOfLikes from "./components/QuantityOfLikes";
import LastComment from "./components/LastComment";

export const Feed = () => {
  const [feedPostModal, setFeedPostModal] = useState(false);
  const [modalPost, setModalPost] = useState();
  const [posts, setPosts] = useState();
  const [likeLoading, setLikeLoading] = useState(false);

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

  async function handlePostLikePut(postId: string) {
    if (!likeLoading) {
      await updateLikeInPost(postId, setLikeLoading);
      await api();
    }
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
            {posts.map((item, index) => {
              return (
                <div className="eachPost" key={index}>
                  <header className="postHeader">
                    <div>
                      <img
                        src={`https://pets4ever.s3.us-east-2.amazonaws.com/${item.userProfileImageUrl}`}
                        alt=""
                        height={48}
                        width={48}
                      />
                      <p>{item.name}</p>
                    </div>
                  </header>
                  <img
                    className="feedPhoto"
                    src={`https://pets4ever.s3.us-east-2.amazonaws.com/${item.imageUrl}`}
                    alt=""
                    onClick={() => handlePostModal(item.postId)}
                  />
                  <div className="postInfoAndStatus">
                    <div className="iconsContainerAndCreatedAt">
                      <IconsToLikeCommentAndShare
                        postId={item.postId}
                        userLikedThisPost={item.userLikedThisPost}
                        handlePostLikePut={handlePostLikePut}
                      />

                      <div className="createdAt">
                        <small>{item.creationDate}</small>
                      </div>
                    </div>
                    <QuantityOfLikes
                      quantityOfLikes={item.quantityOfLikes}
                      userLikedThisPost={item.userLikedThisPost}
                    />
                    <div className="nameAndDescription">
                      <p>@{item.name.toLowerCase()}</p>
                      <small>{item.description}</small>
                    </div>

                    <LastComment comments={item.comments} />
                  </div>
                </div>
              );
            })}
          </div>
        </HeaderAndPhoto>
      </Container>
    );
};

export default Feed;
