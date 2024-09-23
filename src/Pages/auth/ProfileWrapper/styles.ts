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
    gap: 120px;
    flex-grow: 1;

    .user {
      display: flex;
      align-items: center;
      gap: 80px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 48px;
      }

      .fullnameAndNumbers {
        display: flex;
        flex-direction: column;
        gap: 24px;
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
