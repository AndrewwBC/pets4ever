import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 24px;
    border-radius: 8px;
    h1 {
      font-size: 32px;
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
        font-weight: 400;
        letter-spacing: 0.6px;
        color: ${({ theme }) => theme.neutral.c2} !important;
      }
    }
  }
`;
