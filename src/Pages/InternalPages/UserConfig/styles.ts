import styled from "styled-components";

export const Content = styled.main`
  max-width: 600px;
  margin: 0 auto;
  border-radius: 4px;

  padding-bottom: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  section {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 48px;
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      button {
        margin-top: 24px;
        place-self: end;
      }
    }
  }
`;
