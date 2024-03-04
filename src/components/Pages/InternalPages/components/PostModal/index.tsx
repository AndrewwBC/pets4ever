import { createPortal } from "react-dom";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, Modal } from "./styles";
import { Input } from "../../../../input";

const PostModal = () => {
  const { url, userName, description, created_at } = {
    url: "https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Andrew",
    description: "É um bom garoto, ou não é?!?",
    created_at: "02/05/2023",
  };

  return createPortal(
    <Modal>
      <Content>
        <img className="feedPhoto" src={url} alt="" />

        <div className="postInfo">
          <div className="nameDescriptionAndCreatedAt">
            <div className="nameAndCreatedAt">
              <p>@{userName.toLowerCase()}</p>
              <small>{created_at}</small>
            </div>

            <div>
              <small className="description">{description}</small>
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
