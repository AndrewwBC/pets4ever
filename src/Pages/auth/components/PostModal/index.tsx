import { useState } from "react";

import axios from "axios";

import { Comment } from "../../UserProfile/components/ProfileFeed/types";
import { PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";

import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";

const PostModal = ({
  setShowModal,
  modalPostData,
  setModalPostData,
}: PostModalProps) => {
  const [comments, setComments] = useState<Comment[]>();

  const token = localStorage.getItem("token");

  function handleCloseModal() {
    setModalPostData(null);
    setShowModal(false);
  }

  async function retrieveNewComments() {
    try {
      const request = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/comment/${modalPostData?.postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (request) {
        setComments(request.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  window.addEventListener("click", (e: any) => {
    if ((e.target as HTMLElement)?.id === "container") {
      handleCloseModal();
    }
  });

  if (modalPostData)
    return createPortal(
      <Modal id="container">
        <Content>
          <img
            className="feedPhoto"
            src={`https://pets4ever.s3.us-east-2.amazonaws.com/${modalPostData.imageUrl}`}
            alt=""
          />

          <div className="postInfo">
            <div className="closeModal" onClick={handleCloseModal}>
              <p className="x">x</p>
              <p className="fechar">Fechar</p>
            </div>
            <div className="nameDescriptionAndCreatedAt">
              <div className="nameAndCreatedAt">
                <p>@{modalPostData.username.toLowerCase()}</p>
                <small>{modalPostData.creationDate}</small>
              </div>

              <div>
                <small className="description">
                  {modalPostData.description}
                </small>
              </div>
            </div>

            <CommentsPostModal comments={comments} />

            <IconsLikeCommentSharePostModal />

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
