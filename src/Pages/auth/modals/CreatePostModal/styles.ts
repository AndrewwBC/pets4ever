import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from {
    transform: translate3d(0,0,0);
    opacity: 100%;
  } to {
      transform: translate3d(0,-500px,0);
      opacity: 0%;
  }
`;

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

  .animate {
    animation: ${animate} 0.6s ease-in !important;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  .absoluteButtons {
    position: absolute;
    display: flex;
    gap: 24px;
    flex-direction: column;
    z-index: 9999;
    align-items: flex-start;
    align-self: center;
    right: -216px;
    background-color: ${({ theme }) => theme.neutral.c2};
    padding: 12px;
    border-radius: 4px;

    @media (max-width: 1120px) {
    }

    @media (max-width: 1100px) {
      bottom: -80px;
      right: 0;
      left: 0;
      margin: 0px 0px;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      bottom: 220px;
      margin: 0px 12px;
    }

    @media (max-width: 500px) {
      bottom: 200px;
      margin: 0px 12px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      border-radius: 4px;
      padding: 7px;
      color: ${({ theme }) => theme.neutral.c8};
      border: 1px solid transparent;
      width: 100%;

      &:hover {
        background-color: ${({ theme }) => theme.neutral.c1};
        border: 1px solid gainsboro;
      }

      @media (max-width: 768px) {
        gap: 4px;
        p {
          font-size: 14px;
        }
      }

      @media (max-width: 500px) {
        p {
          font-size: 12px;
        }
      }
    }
  }

  height: 80vh;

  @media (max-width: 768px) {
    padding: 12px;
    flex-direction: column;
    width: 95vw;
  }

  .previewContainer {
    height: 100%;
    max-height: 100%;
    min-width: 200px;
    background-color: ${({ theme }) => theme.neutral.c2};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .feedPhoto {
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: block;

    @media (max-width: 768px) {
      border-radius: none;
      max-height: 400px;
      width: 100%;
    }
  }

  .postInfo {
    background-color: ${({ theme }) => theme.neutral.c2};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 28px 16px 12px 12px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;
    height: 100%;

    @media (max-width: 768px) {
      max-height: 300px;
    }

    @media (max-width: 768px) {
      border-radius: 0px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
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

  color: ${({ theme }) => theme.neutral.c8};

  padding: 10px 20px;
  border-width: 4px;

  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    border-radius: 0px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  div {
    border: 3px dashed ${({ theme }) => theme.neutral.c8};
    padding: 8px 4px;
  }

  input[type="file"] {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
