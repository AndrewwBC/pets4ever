import styled from "styled-components";

export const UpdateSection = styled.section`
  .advice {
    margin-bottom: 24px;
    color: #d2122e;
    font-weight: 500;
  }

  .editAdvice {
    background-color: ${({ theme }) => theme.purple.medium};
    color: ${({ theme }) => theme.neutral.c2};
    padding: 2px;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
      gap: 2px;
      display: flex;
      flex-direction: column;
    }
  }

  button {
    margin-top: 12px;
  }
`;
