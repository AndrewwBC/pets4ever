import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { Comment } from "../../UserProfile/components/ProfileFeed/types";
import { isPostProps, PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";

import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";
import { FeedPostProps } from "../../Feed/types";

const PostModal = ({
  setShowModal,
  modalPostData,
  setModalPostData,
}: PostModalProps) => {
  const [post, setPost] = useState<FeedPostProps>();
  const [comments, setComments] = useState<Comment[]>();
  //Estou tentando implementar uma página e um modal ao mesmo tempo.
  // Por isso a utilização de alguns hooks a mais
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  console.log(modalPostData);
  useEffect(() => {
    if (!modalPostData) getData();
    else if (isPostProps(modalPostData)) {
      setPost(modalPostData);
      setComments(modalPostData.comments);
    }
  }, []);

  async function getData() {
    try {
      const request = await axios.get(
        `${import.meta.env.VITE_API}/post/${id}/${userId}`,
        {
          params: {
            userId: "userId",
          },
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (request) {
        setPost(request.data);
        setComments(request.data.comments);
      }

      console.log(request);
    } catch (err) {
      console.log(err);
    }
  }

  function handleCloseModal() {
    setModalPostData(null);
    setShowModal(false);
  }

  async function retrieveNewComments() {
    try {
      const request = await axios.get(
        `import.meta.env.import.meta.env.VITE_API/comment/comments/${post?.postId}`,
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

  if (post)
    return createPortal(
      <Modal id="container">
        <Content>
          <img
            className="feedPhoto"
            src={`https://pets4ever.s3.us-east-2.amazonaws.com/${post.imageUrl}`}
            alt=""
          />

          <div className="postInfo">
            <div className="closeModal" onClick={handleCloseModal}>
              <p className="x">x</p>
              <p className="fechar">Fechar</p>
            </div>
            <div className="nameDescriptionAndCreatedAt">
              <div className="nameAndCreatedAt">
                <p>@{post.name.toLowerCase()}</p>
                <small>{post.creationDate}</small>
              </div>

              <div>
                <small className="description">{post.description}</small>
              </div>
            </div>

            <CommentsPostModal comments={comments} />

            <IconsLikeCommentSharePostModal />

            <InsertCommentPostModal
              postId={post.postId}
              retrieveNewComments={retrieveNewComments}
            />
          </div>
        </Content>
      </Modal>,
      document.getElementById("feedPostModal")!
    );
};

export default PostModal;
