import styled, { keyframes } from "styled-components";

const anime = keyframes`
    from {
        transform: translate3d(0,48px,0);
        opacity: 0;
    } to {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
`;

const backgroundColorsOfMessages = {
  error: "#990f02",
  success: " #4CBB17",
};

export const Modal = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${anime} 0.6s ease-in-out;
`;

export const Content = styled.div`
  padding: 12px 24px;
  border-radius: 4px;
  color: #f9f9f9;
  background-color: ${({ messageStatus }) =>
    backgroundColorsOfMessages[messageStatus]};
  display: flex;
  align-items: end;
  justify-content: space-between;

  span {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  button {
    border: none;
    background-color: #f9f9f9;
    font-weight: 600;
    border-radius: 4px;
    padding: 4px;
    margin-left: 12px;
    cursor: pointer;
  }
`;
