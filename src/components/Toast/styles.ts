import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const anime = keyframes`
    from {
        transform: translate3d(0,-48px,0);
        opacity: 0;
    } to {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
`;

const animeOut = keyframes`
from {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
   to {
      transform: translate3d(0,-48px,0);
      opacity: 0;
    }
`;

const backgroundColorsOfMessages = {
  error: "#990f00",
  success: " #4CBB17",
};

export const Modal = styled.div`
  height: max-content;
  position: fixed;
  top: 48px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: self-start;
  justify-content: center;
  animation: ${anime} 0.6s ease-in-out, ${animeOut} 0.6s ease-in-out 2.5s;
`;

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  messageStatus: string;
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  color: #f9f9f9;
  background-color: ${({
    messageStatus,
  }: {
    messageStatus: "error" | "success";
  }) => backgroundColorsOfMessages[messageStatus]};
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
