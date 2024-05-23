import { createPortal } from "react-dom";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, Modal } from "./styles";
import { Input } from "../../../../input";

const PostModal = ({ post, setModal, setModalPost }) => {
  function handleCloseModal() {
    console.log(post);
    setModal(false);
    setModalPost(false);
  }

  return createPortal(
    <Modal onClick={handleCloseModal}>
      <Content>
        <img
          className="feedPhoto"
          src={`https://pets4ever.s3.us-east-2.amazonaws.com/${post.imageUrl}`}
          alt=""
        />

        <div className="postInfo">
          <div className="nameDescriptionAndCreatedAt">
            <div className="nameAndCreatedAt">
              <p>@{post.name.toLowerCase()}</p>
              <small>{post.creationDate}</small>
            </div>

            <div>
              <small className="description">{post.description}</small>
            </div>
          </div>

          <div className="icons">
            <VscHeart style={{ cursor: "pointer" }} size={26} />
            <VscComment style={{ cursor: "pointer" }} size={26} />
            <VscSend style={{ cursor: "pointer" }} size={26} />
          </div>

          <div className="commentContainer">
            <Input placeholder="Insira um comentário..." />
            <VscSend style={{ cursor: "pointer" }} size={26} />
          </div>
        </div>
      </Content>
    </Modal>,
    document.getElementById("feedPostModal")!
  );
};

export default PostModal;
