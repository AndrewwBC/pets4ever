import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    max-width: none;
    margin-top: 8px;
    width: 100%;
  }

  .doLogin {
    display: flex;
    gap: 4px;
    align-items: center;
    align-self: center;
    margin-top: 24px;

    p {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: ${({ theme }) => theme.purple.medium};
      font-size: 18px;
    }
  }
`;
