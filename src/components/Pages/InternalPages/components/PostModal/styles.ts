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
  z-index: 1000;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;

  .feedPhoto {
    height: 640px;
    width: 500px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    @media (max-width: 1400px) {
      height: 420px;
      width: 380px;
    }
  }

  .postInfo {
    background-color: #f9f9f9;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 16px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
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
      }

      small {
        font-size: 12px;
        color: ${({ theme }) => theme.neutral.c9};
      }
    }

    .description {
      font-size: 16px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
`;
