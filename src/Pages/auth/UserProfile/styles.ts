import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Content = styled.section`
  width: 100%;

  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-left: 48px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    margin: 0;
  }

  .userContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    flex-grow: 1;
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
    }
  }
`;
