import { HTMLProps } from "react";
import styled, { css } from "styled-components";

interface ModalProps extends HTMLProps<HTMLDivElement> {
  transparent: boolean;
}

export const Modal: React.FC<ModalProps> = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  ${({ transparent }: { transparent: boolean }) =>
    transparent
      ? css`
          background-color: rgba(0, 0, 0, 0.8);
        `
      : css`
          background-color: ${({ theme }) => theme.neutral.c2};
        `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  .text {
    background-color: ${({ theme }) => theme.neutral.c8};
    padding: 8px 24px;
    border-radius: 4px;
    font-size: 18px;
    color: ${({ theme }) => theme.neutral.c2};
  }
`;
