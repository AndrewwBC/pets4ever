import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-left: 160px;
  padding-bottom: 24px;

  .userContent {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
