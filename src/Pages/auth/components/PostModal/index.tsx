import { useEffect, useState } from "react";

import { PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";
import { timeSince } from "../../../../utils/timeSince";
import COMMENT_API from "../../../../api/comment/COMMENT_API";
import { Comment } from "../../../../types/comment";

const PostModal = ({
  setShowModal,
  modalPostData,
  setModalPostData,
}: PostModalProps) => {
  const [comments, setComments] = useState<Comment[]>(modalPostData?.comments!);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalPostData]);

  async function retrieveNewComments() {
    try {
      const comments = await COMMENT_API.getComments(modalPostData?.postId!);

      if (comments) {
        setComments(comments);
      }
    } catch (err) {}
  }

  window.addEventListener("click", (e: any) => {
    console.log(e);
    if (e.target?.id === "container") {
      console.log("entrou");
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

            <CommentsPostModal comments={comments} />

            <IconsLikeCommentSharePostModal
              postId={modalPostData.postId}
              userLikedThisPost={modalPostData.userLikedThisPost}
            />

            <InsertCommentPostModal
              postId={modalPostData?.postId}
              retrieveNewComments={retrieveNewComments}
            />
          </div>
        </Content>
      </Modal>,
      document.getElementById("feedPostModal")!
    );
};

export default PostModal;
