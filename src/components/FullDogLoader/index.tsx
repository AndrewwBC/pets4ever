import { createPortal } from "react-dom";
import DogLoader from "./components/DogLoader";
import { Modal, ModalContent } from "./styles";

interface FullDogLoaderProps {
  transparent: boolean;
  text: string;
}

export function FullDogLoader({ transparent, text }: FullDogLoaderProps) {
  return createPortal(
    <Modal transparent={transparent}>
      <ModalContent>
        <DogLoader />
        <div className="text">
          <p>{text}</p>
        </div>
      </ModalContent>
    </Modal>,
    document.getElementById("modal")!
  );
}
