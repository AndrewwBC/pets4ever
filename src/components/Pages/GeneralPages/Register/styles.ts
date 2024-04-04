import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
`;

export const Content = styled.section`
  max-width: 660px;
  margin: 0 auto;
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  .text {
    grid-column: 1/-1;

    h1 {
      margin-bottom: 16px;
    }
  }

  .formContainer {
    grid-column: 1/2;
    margin-top: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    button {
      margin-top: 16px;
      place-self: center;
    }
  }
`;
