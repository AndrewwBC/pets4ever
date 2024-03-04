import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import { Input } from "../../../../input";
import { VscHeart } from "react-icons/vsc";

const StoriesModal = () => {
  return createPortal(
    <Modal>
      <Content>
        <img
          src="https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg"
          alt=""
        />

        <div className="userActions">
          <Input placeholder="Responda este story..." />
          <VscHeart style={{ cursor: "pointer" }} size={32} color="white" />
        </div>
      </Content>
    </Modal>,
    document.getElementById("storiesModal")!
  );
};

export default StoriesModal;
