import { useEffect } from "react";

import { PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";
import { timeSince } from "../../../../utils/timeSince";
import POST_API from "../../../../api/post/POST_API";
import { useUser } from "../../../../context/UserProvider";

const PostModal = ({
  setShowModal,
  modalPostData,
  setModalPostData,
}: PostModalProps) => {
  const { user } = useUser();

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

  if (modalPostData)
    return createPortal(
      <Modal id="container">
        <Content>
          <div className="imageContainer">
            <img
              src={`https://pets4ever.s3.us-east-2.amazonaws.com/${modalPostData.imageUrl}`}
              alt=""
            />
          </div>

          <div className="postInfo">
            <div className="nameDescriptionAndCreatedAt">
              <div className="nameAndCreatedAt">
                <p>@{modalPostData.username.toLowerCase()}</p>
                <small>{timeSince(modalPostData.creationDate)}</small>
              </div>

              <div className="description">
                <small>{modalPostData.description}</small>
              </div>
            </div>

            <CommentsPostModal comments={modalPostData.comments} />

            <IconsLikeCommentSharePostModal
              postId={modalPostData.postId}
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
