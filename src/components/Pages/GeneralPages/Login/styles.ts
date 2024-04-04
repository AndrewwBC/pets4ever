import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
`;

export const Content = styled.div`
  max-width: 340px;
  min-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px 0px 80px;
  padding: 8px;
  border-radius: 8px;
  padding: 16px 12px;

  h1 {
    font-size: 42px;
  }

  p {
    margin-top: 12px;
  }

  @media (max-width: 1400px) {
    margin: 100px 0px 80px;

    h1 {
      font-family: "Poppins";
      font-size: 32px;
      color: #222;
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
    font-size: 16px;
    color: ${({ theme }) => theme.purple.medium};
    font-family: "Roboto", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.purple.dark};
      cursor: pointer;
    }
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
  padding: 32px 0;
  margin: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  .loginWithGoogle {
    display: flex;
    align-items: "center";
    justify-content: center;
    gap: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 4px 8px;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-bottom: 4px;
    max-width: 100%;
  }

  button {
    margin-top: 38px;
    max-width: 100%;
  }
`;

export const RegisterContent = styled.div`
  margin-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
