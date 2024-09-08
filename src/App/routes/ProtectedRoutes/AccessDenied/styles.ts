import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: #ee4b10;
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
  }
`;
