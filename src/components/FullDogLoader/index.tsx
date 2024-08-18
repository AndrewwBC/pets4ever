import { createPortal } from "react-dom";
import styled from "styled-components";
import DogLoader from "../DogLoader";

const Modal = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.9);
`;

export function FullDogLoader() {
  return createPortal(
    <Modal>
      <DogLoader />
    </Modal>,
    document.getElementById("modal")!
  );
}
