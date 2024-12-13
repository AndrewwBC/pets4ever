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

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.neutral.c1};
  border-radius: 4px;
  padding: 4px 12px;
  margin-bottom: 24px;

  .option {
    label {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      max-width: max-content;
      color: ${({ theme }) => theme.neutral.c8};
    }
  }

  input[type="radio"] {
    display: block;
    color: red;
    margin-left: 10px;
    cursor: pointer !important;

    all: revert;
  }
`;
