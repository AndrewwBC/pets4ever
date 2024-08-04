import styled from "styled-components";

export const ModalOpacity = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  border-radius: 4px;
  z-index: 10;
  max-width: 800px;

  .buttonContainer {
    display: flex;
    gap: 12px;

    .cancelButton {
      background-color: rgba(220, 0, 0);

      :hover {
        background-color: rgba(250, 0, 0);
      }
    }
  }

  button {
    margin-top: 24px;
    background-color: ${({ theme }) => theme.yellow.medium};
    padding: 8px 24px;
    font-size: 18px;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: progress;
      background-color: #f9f9f9 !important;
    }
  }

  .uploadMessage {
    margin-top: 16px;
    font-size: 18px;
  }
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 200px; /* Ajuste conforme necessário */

  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  border: 1px dashed black;
  border-width: 4px;
  color: black;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

export const UpdateProfileImgLoader = styled.div`
  border-width: 4px;
  margin-top: 18px;
  border-style: solid;
  border-color: black red black red;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
