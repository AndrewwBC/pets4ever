import { useEffect, useState } from "react";
import { PostsContainer } from "./styles";

import PostModal from "../../modals/PostModal";
import { Link } from "react-router-dom";
import IconsToLikeCommentAndShare from "../components/IconsToLikeCommentAndShare";
import QuantityOfLikes from "../components/QuantityOfLikes";
import LastComment from "../components/LastComment";
import { ListOfUserStateProps } from "../../modals/ListOfUserModal/types";
import NoPosts from "./components/NoPosts";
import { useUser } from "../../../../context/UserProvider";
import ListOfUserModal from "../../modals/ListOfUserModal";
import POST_API from "../../../../api/post/POST_API";
import { timeSince } from "../../../../utils/timeSince";
import { PostProps } from "../../../../types/post";
import PostOptionsModal from "./components/PostOptionsModal";
import { RxDotsVertical } from "react-icons/rx";
import { getPosts } from "../api";
import { FullDogLoader } from "../../../../components/FullDogLoader";

export default function Posts() {
  const { user } = useUser();
  const [posts, setPosts] = useState<PostProps[]>();
  const [listOfLikes, setListOfLikesModal] = useState<ListOfUserStateProps>({
    title: "Curtidas",
    modalState: false,
    data: undefined,
  });
  const [showModal, setShowModal] = useState(false);
  const [modalPostData, setModalPostData] = useState<PostProps | null>(null);
  const [modalPostOptions, setPostOptionsModal] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    api();
  }, [modalPostData]);

  async function api() {
    const posts = await getPosts(user?.username!);
    setPosts(posts);
  }

  function handlePostModal(postId: string) {
    setShowModal(true);
    setModalPostData(posts?.find((post) => post.postId === postId)!);
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

  if (!posts)
    return <FullDogLoader text="Carregando Postagens..." transparent={false} />;

  if (posts.length < 1)
    return <NoPosts small="Não há postagens." paragraph="Seja o primeiro!" />;

  if (posts)
    return (
      <PostsContainer>
        {listOfLikes.data && (
          <ListOfUserModal
            title={listOfLikes.title}
            listOfUsers={listOfLikes}
            setModal={setListOfLikesModal}
          />
        )}
        {showModal && (
          <PostModal
            setShowModal={setShowModal}
            modalPostData={modalPostData}
            setModalPostData={setModalPostData}
            handlePostLikePut={handlePostLikePut}
          />
        )}

        {posts.map((item, index) => {
          return (
            <div className="eachPost" key={index}>
              {modalPostOptions && (
                <PostOptionsModal
                  api={api}
                  post={item}
                  setModal={setPostOptionsModal}
                />
              )}
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
                  onClick={() => setPostOptionsModal(true)}
                />
              </header>
              <div className="imageContainer">
                <img
                  src={`https://pets4ever.s3.us-east-2.amazonaws.com/${item.imageUrl}`}
                  alt=""
                  onClick={() => handlePostModal(item.postId)}
                />
              </div>
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
                  setListOfLikesModal={setListOfLikesModal}
                  quantityOfLikes={item.quantityOfLikes}
                  userLikedThisPost={item.userLikedThisPost}
                />
                <div className="nameAndDescription">
                  <Link to={`/${item.username}`}>
                    <span className="name">{item.username.toLowerCase()}</span>
                  </Link>
                  <small>{item.description}</small>
                </div>

                <LastComment comments={item.comments} />
              </div>
            </div>
          );
        })}
      </PostsContainer>
    );
}
