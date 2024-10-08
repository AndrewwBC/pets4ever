import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  body {
    overflow: hidden !important;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.neutral.c3};
  border-radius: 4px;
  max-width: 400px;
  width: 400px;
  height: max-content;
  padding: 8px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    li {
      font-weight: 500;
      cursor: pointer;
      font-size: 16px;
      border-radius: 4px;
      width: 100%;
      color: ${({ theme }) => theme.neutral.c7};
      background-color: ${({ theme }) => theme.neutral.c2};
    }

    .delete {
      color: red;
    }
  }
`;
