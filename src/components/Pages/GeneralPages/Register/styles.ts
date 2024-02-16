import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
`;

export const Content = styled.section`
  max-width: 660px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  .text {
    grid-column: 1/-1;
  }

  .formContainer {
    grid-column: 1/2;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      place-self: center;
    }
  }
`;
