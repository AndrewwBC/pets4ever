import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const InputContainer = styled.div`
  padding: 4px;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.neutral.c1};
  }
`;
