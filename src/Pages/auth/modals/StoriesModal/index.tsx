import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import { Input } from "../../../../components/input";
import { VscHeart } from "react-icons/vsc";
import { StoriesProps } from "../../../../api/storie/types";
import { Dispatch, SetStateAction } from "react";
import Image from "../../Feed/Posts/components/Image";

interface StoriesModal {
  modal: {
    storie: StoriesProps | undefined;
    modalState: boolean;
  };
  setModal: Dispatch<
    SetStateAction<{ storie: StoriesProps | undefined; modalState: boolean }>
  >;
}

const StoriesModal = ({ modal, setModal }: StoriesModal) => {
  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "storieModal") {
      setModal({
        storie: undefined,
        modalState: false,
      });
    }
  });

  if (modal.modalState)
    return createPortal(
      <Modal id="storieModal">
        <Content>
          <Image onClick={() => undefined} postUrl={modal.storie!.fileUrl} />

          <div className="userActions">
            <Input placeholder="Responda este story..." />
            <VscHeart
              className="icon"
              style={{ cursor: "pointer" }}
              size={32}
            />
          </div>
        </Content>
      </Modal>,
      document.getElementById("storiesModal")!
    );
};

export default StoriesModal;
