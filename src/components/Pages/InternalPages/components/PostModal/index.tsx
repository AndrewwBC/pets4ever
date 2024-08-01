import { createPortal } from "react-dom";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, Modal } from "./styles";
import { Input } from "../../../../input";
import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";

const PostModal = ({ setShowModal, modalPostData, setModalPostData }: any) => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  const { id } = useParams();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [commentData, setCommentData] = useState({
    comment: "",
    postId: id,
  });
  console.log(modalPostData);
  useEffect(() => {
    if (!modalPostData) getData();
    else if (modalPostData) {
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
    setModalPostData(false);
    setShowModal(false);
  }

  async function retrieveNewComments() {
    try {
      const request = await axios.get(
        `import.meta.env.import.meta.env.VITE_API/comment/comments/${commentData.postId}`,
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

  async function handleSendComment() {
    try {
      const request = await axios({
        url: "import.meta.env.import.meta.env.VITE_API/comment/store",
        method: "post",
        data: commentData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (request) retrieveNewComments();

      console.log(request);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  }

  function handleCommentFocus() {
    const input = document.getElementById("inputComment");

    input?.focus();
  }

  window.addEventListener("click", (e) => {
    if (e.target?.id === "container") handleCloseModal();
  });

  if (post)
    return createPortal(
      <Modal id="container">
        <Content>
          <img
            className="feedPhoto"
            src={`https://pets4ever.s3.us-east-2.amazonaws.com/${post.userProfileImageUrl}`}
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

            <div className="commentContainer">
              {comments.map(
                ({ comment, userId, username, userProfileImageUrl }) => (
                  <div className="comment" key={userId + Math.random()}>
                    <div className="usernameAndImage">
                      <img
                        src={`https://pets4ever.s3.us-east-2.amazonaws.com/${userProfileImageUrl}`}
                        height={28}
                        width={28}
                        alt=""
                      />
                      <p>{username}</p>
                    </div>

                    <p>{comment}</p>
                  </div>
                )
              )}
            </div>

            <div className="icons">
              <VscHeart style={{ cursor: "pointer" }} size={26} />
              <VscComment
                onClick={() => handleCommentFocus()}
                style={{ cursor: "pointer" }}
                size={26}
              />
              <VscSend style={{ cursor: "pointer" }} size={26} />
            </div>

            <div className="insertCommentContainer">
              <Input
                id="inputComment"
                placeholder="Insira um comentário..."
                onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                  setCommentData((prevState) => ({
                    ...prevState,
                    comment: target.value,
                  }))
                }
              />
              <VscSend
                onClick={handleSendComment}
                style={{ cursor: "pointer" }}
                size={26}
              />
            </div>
          </div>
        </Content>
      </Modal>,
      document.getElementById("feedPostModal")!
    );
};

export default PostModal;
