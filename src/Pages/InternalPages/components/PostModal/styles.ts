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

  @media (max-width: 768px) {
    padding-top: 64px;
    align-items: start;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  max-height: 640px;
  max-width: 800px;
  padding: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .feedPhoto {
    max-height: 100%;
    max-width: 100%;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    @media (max-width: 764px) {
      max-height: 700px;
      width: 100%;
      border-radius: 0px;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
  }

  .postInfo {
    background-color: ${({ theme }) => theme.bg};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 16px;
    padding-top: 28px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;

    .commentContainer {
      background-color: ${({ theme }) => theme.bg};
      border-radius: 4px;
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 12px 0px;
      overflow-y: scroll;
      max-height: 260px;

      @media (max-width: 768px) {
        height: 48px;
        padding-top: 12px;
        overflow-y: scroll;
      }

      .comment {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 14px;
        color: #222;

        .usernameAndImage {
          display: flex;
          align-items: center;
          gap: 4px;
          p {
            color: #888;
          }

          img {
            display: block;
            border-radius: 999px;
            object-fit: cover;
          }
        }
      }
    }

    .closeModal {
      position: absolute;
      display: flex;
      justify-content: center;
      background-color: red;
      font-size: 14px;
      font-weight: 700;
      color: #f9f9f9;
      right: 0;
      left: 0;
      cursor: pointer;

      .fechar {
        display: none;
      }

      &:hover {
        .x {
          display: none;
        }

        .fechar {
          display: block;
          font-size: 16px;
        }
      }
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

    .description {
      font-size: 16px;
      word-wrap: break-word;
    }
  }

  .icons {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.neutral.c9};
  }

  .insertCommentContainer {
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
`;
