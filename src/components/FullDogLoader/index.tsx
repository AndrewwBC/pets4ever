import { createPortal } from "react-dom";
import DogLoader from "./components/DogLoader";
import { Modal, TransparentModalContainer } from "./styles";

interface FullDogLoaderProps {
  transparent: boolean;
}

export function FullDogLoader({ transparent }: FullDogLoaderProps) {
  if (transparent)
    return createPortal(
      <TransparentModalContainer>
        <DogLoader />
      </TransparentModalContainer>,
      document.getElementById("modal")!
    );

  return createPortal(
    <Modal>
      <DogLoader />
    </Modal>,
    document.getElementById("modal")!
  );
}
