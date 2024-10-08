import styled from "styled-components";

export const Container = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
  padding: 32px 48px;
  border-radius: 8px;
`;

export const WarningContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  span {
    font-size: 20px;
  }

  .buttons {
    display: flex;
    gap: 24px;

    button {
      background-color: red;
      color: #fff;
    }

    button + button {
      background-color: #355e3b;
    }
  }
`;

export const TextContainer = styled.div`
  padding: 8px;
  font-weight: 500px;
  font-size: 24px;
  margin-bottom: 24px;
  border-bottom: 2px solid #b9b9b9;
`;
