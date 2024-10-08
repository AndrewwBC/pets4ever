import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100vw - 40%);
  height: calc(100vh - 20%);

  .previewContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 4px;

    img {
      height: 100%;
    }
    background-color: ${({ theme }) => theme.neutral.c2};
  }

  .inputContainer {
    height: 100%;
    background-color: ${({ theme }) => theme.neutral.c2};
  }

  .cancelImageButton {
    width: 100%;
    background-color: ${({ theme }) => theme.yellow.light};
    font-size: 18px;
    border: none;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.yellow.dark};
    }
  }

  .feedPhoto {
    border-top-left-radius: 8px;
  }

  .postInfo {
    background-color: ${({ theme }) => theme.neutral.c2};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 28px 16px 4px 12px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;
    width: 100%;

    .post {
      display: flex;
      justify-content: center;
      background-color: green;
      font-size: 18px;
      font-weight: 700;
      color: #f9f9f9;
      margin-top: 12px;
      cursor: pointer;
    }
  }

  .nameDescriptionAndCreatedAt {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: flex-start;
    gap: 32px;

    .nameAndCreatedAt {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${({ theme }) => theme.neutral.c6};
        font-weight: 700;
      }

      small {
        font-size: 12px;
        color: ${({ theme }) => theme.neutral.c9};
      }
    }

    .descriptionContainer {
      width: 100%;

      textarea {
        width: 100%;
        flex-grow: 1;
        box-sizing: border-box;
        resize: none;
        padding: 10px;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        border: none;
      }
    }
  }

  .icons {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    color: #222;
  }

  .commentContainer {
    gap: 12px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    width: 100%;
  }
`;

export const InputFileModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  flex-grow: 1;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ theme }) => theme.neutral.c2};

  color: black;

  padding: 10px 20px;
  border-width: 4px;

  transition: background-color 0.3s ease;

  cursor: pointer;
  div {
    border: 3px dashed #444;
    padding: 8px 4px;
  }

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
