import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 100%;
    padding-right: 32px !important;
  }
  position: relative;

  .icon {
    height: 22px;
    width: 22px;
    color: ${({ theme }) => theme.purple.medium};
    position: absolute;
    right: 8px;
    cursor: pointer;
    background-color: inherit;
  }
`;
