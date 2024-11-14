import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .content {
    z-index: 1000;
    background-color: ${({ theme }) => theme.neutral.c2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 16px;
    border-radius: 8px;
    gap: 24px;

    p {
      font-weight: 500;
      color: ${({ theme }) => theme.neutral.c8};
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .alert {
        font-size: 18px;
        color: #cd2222;
      }
    }

    button {
      margin: 0px;
    }
  }
`;
