import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
