import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.neutral.c2};
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 160px 0px 220px;

  h1 {
    font-size: 42px;
  }

  .forgotPassword {
    margin: 32px 0px;
    font-size: 16px;
    color: ${({ theme }) => theme.neutral.c5};

    &:hover {
      color: ${({ theme }) => theme.neutral.c6};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 42px;

  button {
    margin: 32px 0px;
  }
`;
