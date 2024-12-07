import { useEffect, useState } from "react";
import { PostsContainer } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import IconsToLikeCommentAndShare from "../components/IconsToLikeCommentAndShare";
import QuantityOfLikes from "../components/QuantityOfLikes";
import LastComment from "../components/LastComment";
import NoPosts from "./components/NoPosts";
import { useUser } from "../../../../context/UserProvider";
import POST_API from "../../../../api/post/POST_API";
import { timeSince } from "../../../../utils/timeSince";
import { PostProps } from "../../../../types/post";
import PostOptionsModal from "./components/PostOptionsModal";
import { RxDotsVertical } from "react-icons/rx";
import { FullDogLoader } from "../../../../components/FullDogLoader";
import Image from "./components/Image";
import { usePosts } from "../../../../context/PostsProvider";

export default function Posts() {
  const { user } = useUser();
  const { posts, setPosts, getPosts, isLoading } = usePosts();

  const [modalPostOptions, setPostOptionsModal] = useState<{
    state: boolean;
    post: PostProps | undefined;
  }>({
    state: false,
    post: undefined,
  });

  const navigate = useNavigate();
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    if (user) await getPosts(user.username);
  }

  function handlePostModal(postId: string) {
    navigate(`/feed/p/${postId}`);
  }

  async function handlePostLikePut(postId: string) {
    const data = {
      username: user!.username,
      postId,
    };

    if (!likeLoading) {
      try {
        setLikeLoading(true);
        const updatedPost = await POST_API.patchPostLike(data);

        const newPosts = posts!.map((post) =>
          post.postId === updatedPost.postId
            ? (post = updatedPost)
            : (post = post)
        );

        setPosts(newPosts);
      } catch (err) {
      } finally {
        setLikeLoading(false);
      }
    }
  }

  function editPostDescription(postId: string) {
    navigate(`/feed/p/${postId}/edit`);
  }

  if (isLoading)
    return <FullDogLoader text="Carregando Postagens..." transparent={false} />;

  if (posts && posts.length < 1)
    return <NoPosts small="Não há postagens." paragraph="Seja o primeiro!" />;

  if (posts)
    return (
      <PostsContainer>
        {modalPostOptions.state && (
          <PostOptionsModal
            getPosts={getData}
            modal={modalPostOptions}
            setModal={setPostOptionsModal}
            editPostDescriptionFunction={editPostDescription}
          />
        )}

        {posts.map((item, index) => {
          return (
            <div className="eachPost" key={index}>
              <header className="postHeader">
                <div className="usernameAndProfileImg">
                  <img
                    loading="lazy"
                    src={
                      item.profileImgUrl
                        ? `https://pets4ever.s3.us-east-2.amazonaws.com/${item.profileImgUrl}`
                        : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                    }
                    alt=""
                    height={40}
                    width={40}
                  />
                  <Link to={`/${item.username}`}>
                    <span>{item.username}</span>
                  </Link>
                </div>

                <RxDotsVertical
                  className="dots"
                  size={22}
                  onClick={() =>
                    setPostOptionsModal({
                      state: true,
                      post: item,
                    })
                  }
                />
              </header>
              <Image
                onClick={() => handlePostModal(item.postId)}
                postUrl={item.imageUrl}
              />
              <div className="postInfoAndStatus">
                <div className="iconsContainerAndCreatedAt">
                  <IconsToLikeCommentAndShare
                    postId={item.postId}
                    userLikedThisPost={item.userLikedThisPost}
                    handlePostLikePut={handlePostLikePut}
                    handlePostModal={handlePostModal}
                  />

                  <div className="createdAt">
                    <small>{timeSince(item.creationDate)}</small>
                  </div>
                </div>
                <QuantityOfLikes
                  listOfLikes={item.listOfLikes}
                  quantityOfLikes={item.quantityOfLikes}
                  userLikedThisPost={item.userLikedThisPost}
                />
                <div className="nameAndDescription">
                  <Link to={`/${item.username}`}>
                    <span className="name">{item.username.toLowerCase()}</span>
                  </Link>
                  <small>
                    {item.description.length > 28
                      ? item.description.slice(0, 28) + "..."
                      : item.description.slice(0, 28)}
                  </small>
                </div>

                <LastComment comments={item.comments} />
              </div>
            </div>
          );
        })}
      </PostsContainer>
    );
}
