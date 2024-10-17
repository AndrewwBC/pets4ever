import { useEffect, useState } from "react";

import { PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";
import { timeSince } from "../../../../utils/timeSince";
import POST_API from "../../../../api/post/POST_API";
import { useUser } from "../../../../context/UserProvider";
import QuantityOfLikes from "../../Feed/components/QuantityOfLikes";
import { Link } from "react-router-dom";
import EditDescriptionModal from "../../Feed/Posts/components/EditDescriptionModal";
import { PostProps } from "../../../../types/post";
import PostOptionsModal from "../../Feed/Posts/components/PostOptionsModal";
import { RxDotsVertical } from "react-icons/rx";

const PostModal = ({
  getPosts,
  setShowModal,
  modalPostData,
  setModalPostData,
  editDescription,
  setEditPost,
}: PostModalProps) => {
  const { user } = useUser();
  const [modalPostOptions, setPostOptionsModal] = useState<{
    state: boolean;
    post: PostProps | undefined;
  }>({
    state: false,
    post: undefined,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalPostData]);

  async function getPost() {
    const data = {
      username: user?.username,
      postId: modalPostData?.postId,
    };

    try {
      const post = await POST_API.show(data);

      if (post) {
        setModalPostData(post);
      }
    } catch (err) {}
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "container") {
      setShowModal(false);
      setModalPostData(null);
    }
  });

  function editPostDescription() {
    setEditPost(true);
    setShowModal(true);
    setModalPostData(modalPostData);
  }

  if (modalPostData)
    return createPortal(
      <Modal id="container">
        {modalPostOptions.state && (
          <PostOptionsModal
            getPosts={getPosts}
            modal={modalPostOptions}
            setModal={setPostOptionsModal}
            setPostModal={setShowModal}
            editPostDescriptionFunction={editPostDescription}
          />
        )}
        {editDescription && (
          <EditDescriptionModal
            postId={modalPostData.postId}
            getPost={getPost}
            setModal={setEditPost}
          />
        )}
        <Content>
          <div className="imageContainer">
            <img
              src={`https://pets4ever.s3.us-east-2.amazonaws.com/${modalPostData.imageUrl}`}
              alt=""
            />
          </div>

          <div className="postInfo">
            <div className="nameDescriptionAndDots">
              <div className="nameAndPostOptions">
                <Link to={modalPostData.username}>
                  <p>@{modalPostData.username}</p>
                </Link>

                <RxDotsVertical
                  style={{ cursor: "pointer" }}
                  className="dots"
                  size={22}
                  onClick={() =>
                    setPostOptionsModal({
                      state: true,
                      post: modalPostData,
                    })
                  }
                />
              </div>

              <div className="description">
                <small>{modalPostData.description}</small>
              </div>
            </div>

            <CommentsPostModal
              getPost={getPost}
              comments={modalPostData.comments}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <IconsLikeCommentSharePostModal
                postId={modalPostData.postId}
                userLikedThisPost={modalPostData.userLikedThisPost}
                getPost={getPost}
              />

              <small>{timeSince(modalPostData.creationDate)}</small>
            </div>

            <QuantityOfLikes
              listOfLikes={modalPostData.listOfLikes}
              quantityOfLikes={modalPostData.quantityOfLikes}
              userLikedThisPost={modalPostData.userLikedThisPost}
            />

            <InsertCommentPostModal
              postId={modalPostData?.postId}
              getPost={getPost}
            />
          </div>
        </Content>
      </Modal>,
      document.getElementById("feedPostModal")!
    );
};

export default PostModal;
