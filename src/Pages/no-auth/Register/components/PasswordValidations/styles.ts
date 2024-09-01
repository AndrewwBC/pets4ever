import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  text-align: start;
  padding: 8px;
  border-radius: 8px;

  .validations {
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    span {
      display: block;
      margin-left: 12px;
      font-size: 14px;
      color: ${({ theme }) => theme.neutral.c9};
    }
  }
`;
