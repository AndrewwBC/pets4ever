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

  padding: 240px;

  @media (max-width: 1200px) {
    padding: 60px;
  }

  @media (max-width: 600px) {
    padding: 12px;
    align-items: start;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  width: 100%;
  transition: all 1s;

  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
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
      grid-template-rows: auto 20vh auto;
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
      font-size: 18px;
      color: ${({ theme }) => theme.neutral.c8};
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
    margin-bottom: 8px;
  }

  .insertCommentContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    margin-top: 12px;

    div {
      width: 100%;
    }
  }
`;
