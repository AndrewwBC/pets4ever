import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.neutral.c2};
  height: 100vh;

  h1 {
    margin: 0px 0px 24px 0px;
    color: ${({ theme }) => theme.neutral.c8};
  }

  form {
    gap: 12px;
  }

  button {
    margin-top: 24px;
  }
`;
