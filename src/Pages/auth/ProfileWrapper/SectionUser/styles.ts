import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.neutral.c2};
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
