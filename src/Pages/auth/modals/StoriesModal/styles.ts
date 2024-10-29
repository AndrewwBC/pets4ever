import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  max-height: 600px;

  .userActions {
    background-color: ${({ theme }) => theme.neutral.c1};

    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px 24px;
    gap: 32px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    .icon {
      color: ${({ theme }) => theme.neutral.c8};
    }
  }
`;
