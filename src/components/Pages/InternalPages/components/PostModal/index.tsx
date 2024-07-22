import { createPortal } from "react-dom";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, Modal } from "./styles";
import { Input } from "../../../../input";
import { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";

const PostModal = ({ post, setModal, setModalPost }: any) => {
  const [commentData, setCommentData] = useState({
    comment: "",
    postId: post.postId,
  });

  function handleCloseModal() {
    setModal(false);
    setModalPost(false);
  }

  async function handleSendComment() {
    const token = localStorage.getItem("token");

    try {
      const request = await axios({
        url: "http://localhost:8080/comment/store",
        method: "post",
        data: commentData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(request);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  }

  console.log(post);

  return createPortal(
    <Modal>
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

          <div className="commentContainer">
            {post.comments.map(
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
            <VscComment style={{ cursor: "pointer" }} size={26} />
            <VscSend style={{ cursor: "pointer" }} size={26} />
          </div>

          <div className="insertCommentContainer">
            <Input
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
