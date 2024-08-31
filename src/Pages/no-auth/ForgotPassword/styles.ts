import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 160px 0px 80px;
  padding: 8px;
  border-radius: 8px;
  padding: 32px 12px;

  p:first-child {
    font-size: 24px;
    font-weight: 500;
    font-family: "Poppins";
    color: red;
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
    color: #7b44ff;
    font-family: "Roboto", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.neutral.c6};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 42px;

  input {
    margin-bottom: 4px;
  }

  button {
    margin-top: 38px;
  }
`;
