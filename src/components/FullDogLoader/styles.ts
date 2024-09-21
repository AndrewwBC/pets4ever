import styled from "styled-components";

export const Modal = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  background-color: ${({ theme }) => theme.neutral.c2};
`;

export const TransparentModalContainer = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.5);
`;
