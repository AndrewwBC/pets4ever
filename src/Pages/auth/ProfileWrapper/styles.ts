import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
  width: calc(100% - 40px);
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0 auto;
`;

export const Content = styled.section`
  width: 100%;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 100vw;
  }

  .userContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;

    .user {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 48px;
      }

      .fullnameAndNumbers {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }

      .bio {
        margin-top: 12px;
        display: flex;
        background-color: #aaffbb;
        align-items: center;
        justify-content: center;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
        max-height: 80px;

        .textContainer {
          word-wrap: break-word;
          flex-wrap: wrap;
          word-break: break-all;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    @media (max-width: 768px) {
      gap: 24px;
    }
    .username {
      color: ${({ theme }) => theme.neutral.c9};
    }
  }

  .userImageAndName {
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: 9999px;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
