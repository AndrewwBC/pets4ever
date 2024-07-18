import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.neutral.c2};

  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 64px;
  .userContent {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
