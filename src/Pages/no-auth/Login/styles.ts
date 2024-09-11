import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 340px;
  min-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  padding: 16px 12px;

  h1 {
    font-family: "Poppins";
    color: ${({ theme }) => theme.neutral.c8};
    font-size: 42px;
  }

  p {
    margin-top: 12px;
  }

  @media (max-width: 1400px) {
    margin: 100px 0px 80px;

    h1 {
      font-size: 32px;
    }
  }

  .forgotPassword {
    margin: 0px 0px;
    font-size: 16px;
    align-self: flex-end;
    color: ${({ theme }) => theme.purple.medium};
    font-family: "Roboto", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.purple.dark};
      cursor: pointer;
    }
  }
  .forgotPassword,
  .registerLink {
    margin: 0px 0px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.purple.medium};
    font-family: "Roboto", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.purple.light};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    max-width: 100%;
  }

  button {
    margin-top: 36px;
    max-width: 100%;
  }
`;

export const RegisterContent = styled.div`
  margin-top: 36px;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.neutral.c9};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .registerLink {
    font-size: 18px;
  }

  p {
    color: ${({ theme }) => theme.neutral.c9};
  }
`;
