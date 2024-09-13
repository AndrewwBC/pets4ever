import { useState } from "react";
import { PostsContainer } from "./styles";
import { FeedPostProps } from "../types";
import PostModal from "../../components/PostModal";
import { Link } from "react-router-dom";
import IconsToLikeCommentAndShare from "../components/IconsToLikeCommentAndShare";
import QuantityOfLikes from "../components/QuantityOfLikes";
import LastComment from "../components/LastComment";
import { ListOfUserStateProps } from "../../components/ListOfUserModal/types";
import NoPosts from "./components/NoPosts";
import { useUser } from "../../../../context/UserProvider";
import ListOfUserModal from "../../components/ListOfUserModal";
import POST_API from "../../../../api/post/POST_API";

interface PostsProps {
  posts: FeedPostProps[];
  api: () => Promise<any>;
}

export default function Posts({ posts, api }: PostsProps) {
  const [listOfLikes, setListOfLikesModal] = useState<ListOfUserStateProps>({
    modalState: false,
    data: undefined,
  });

  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [modalPostData, setModalPostData] = useState<FeedPostProps | null>(
    null
  );

  const [likeLoading, setLikeLoading] = useState(false);

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
        await POST_API.patchPostLike(data);
        await api();
      } catch (err) {
      } finally {
        setLikeLoading(false);
      }
    }
  }

  if (posts.length < 1) return <NoPosts />;

  if (posts)
    return (
      <PostsContainer>
        {listOfLikes.data && (
          <ListOfUserModal
            listOfUsers={listOfLikes}
            setModal={setListOfLikesModal}
          />
        )}
        {showModal && (
          <PostModal
            setShowModal={setShowModal}
            modalPostData={modalPostData}
            setModalPostData={setModalPostData}
          />
        )}

        {posts.map((item, index) => {
          return (
            <div className="eachPost" key={index}>
              <header className="postHeader">
                <div>
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
                  />

                  <div className="createdAt">
                    <small>{item.creationDate}</small>
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
