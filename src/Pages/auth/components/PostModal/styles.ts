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
  z-index: 99999;

  /* @media (max-width: 768px) {
    padding-top: 64px;
    align-items: start;
  } */
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  width: 100%;
  padding: 180px;
  transition: all 1s;
  padding: 240px;

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
  }

  .imageContainer {
    width: 100%;

    padding-bottom: 125%;
    position: relative;

    @media (max-width: 768px) {
      padding-bottom: 75%;
    }

    img {
      position: absolute;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      @media (max-width: 768px) {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .postInfo {
    background-color: ${({ theme }) => theme.bg};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 60vh auto;

    @media (max-width: 768px) {
      grid-template-rows: auto 30vh auto;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      border-top-right-radius: 0px;
    }

    padding: 16px;
    padding-top: 28px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;

    .description {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      width: 100%;
      margin-bottom: 12px;
      padding: 12px;
    }

    .commentContainer {
      background-color: ${({ theme }) => theme.bg};
      border-radius: 4px;
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 12px 0px;
      overflow-y: scroll;

      @media (max-width: 768px) {
        max-height: 100%;
        padding-top: 12px;
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
    align-items: end;
    justify-content: flex-start;
    color: ${({ theme }) => theme.neutral.c9};
  }

  .insertCommentContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    margin-top: 12px;

    input {
      width: 100%;
    }
  }
`;
