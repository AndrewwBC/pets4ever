import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;

  background-color: ${({ theme }) => theme.bg};

  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0 auto;

  div {
    border-radius: 8px;
    h1 {
      text-transform: uppercase;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    .content {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 2px;
      p,
      a {
        font-weight: 500;
        font-size: 18px;
        color: ${({ theme }) => theme.neutral.c8} !important;
      }
    }
  }
`;
