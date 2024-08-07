import { useContext, useEffect, useState } from "react";
import { Container, HeaderAndPhoto } from "./styles";

import PostModal from "../components/PostModal";
import Stories from "./components/Stories";
import { getPosts } from "./api";
import { updateLikeInPost } from "./api/likePost";
import IconsToLikeCommentAndShare from "./components/IconsToLikeCommentAndShare";
import QuantityOfLikes from "./components/QuantityOfLikes";
import LastComment from "./components/LastComment";
import ListOfLikes from "./components/ListOfLikes";
import { Link } from "react-router-dom";
import { ListOfLikesStateProps } from "./components/ListOfLikes/types";
import { FeedPostProps } from "./types";
import { GlobalContext } from "../../../context/GlobalStorage";
import { FullDogLoader } from "../../../components/FullDogLoader";

export const Feed = () => {
  const { data } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [modalPostData, setModalPostData] = useState<FeedPostProps | null>(
    null
  );
  const [posts, setPosts] = useState<FeedPostProps[]>();
  const [likeLoading, setLikeLoading] = useState(false);
  const [listOfLikes, setListOfLikesModal] = useState<ListOfLikesStateProps>({
    modalState: false,
    data: undefined,
  });

  useEffect(() => {
    api();
  }, []);

  async function api() {
    const posts = await getPosts();
    setPosts(posts);
  }

  function handlePostModal(postId: string) {
    setShowModal(true);
    setModalPostData(posts?.find((post) => post.postId === postId)!);
  }
  console.log(data.name);
  async function handlePostLikePut(postId: string) {
    if (!likeLoading) {
      await updateLikeInPost(postId, setLikeLoading);
      await api();
    }
  }

  if (!posts) return <FullDogLoader />;
  else
    return (
      <Container>
        {showModal && (
          <PostModal
            setShowModal={setShowModal}
            modalPostData={modalPostData}
            setModalPostData={setModalPostData}
          />
        )}
        {listOfLikes.data && (
          <ListOfLikes
            listOfLikes={listOfLikes}
            setModal={setListOfLikesModal}
          />
        )}

        <Stories />

        <HeaderAndPhoto>
          <div className="postContainer">
            {posts.map((item, index) => {
              return (
                <div className="eachPost" key={index}>
                  <header className="postHeader">
                    <div>
                      <img
                        src={`https://pets4ever.s3.us-east-2.amazonaws.com/${item.userProfileImageUrl}`}
                        alt=""
                        height={40}
                        width={40}
                      />
                      <Link to={`/profile/${item.userId}`}>
                        <span>{item.name}</span>
                      </Link>
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
                      listOfLikes={item.listOfLikes}
                      setListOfLikesModal={setListOfLikesModal}
                      quantityOfLikes={item.quantityOfLikes}
                      userLikedThisPost={item.userLikedThisPost}
                    />
                    <div className="nameAndDescription">
                      <Link to={`/profile/${item.userId}`}>
                        <span className="name">{item.name.toLowerCase()}</span>
                      </Link>
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
