import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const buttonSizes = {
  big: "16px 64px",
  medium: "12px 64px",
  low: "8px 64px",
};

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "big" | "medium" | "low";
}

export const MyButton: React.FC<MyButtonProps> = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  place-self: center;
  padding: ${({ size }: { size: "big" | "medium" | "low" }) =>
    buttonSizes[size]};

  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.yellow.light};
  max-width: max-content;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    animation-play-state: paused;
    background-color: ${({ theme }) => theme.yellow.dark};
  }

  &:disabled {
    color: ${({ theme }) => theme.neutral.c8};
    background-color: ${({ theme }) => theme.neutral.c4};
  }

  span {
    font-size: 18px !important;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.6;
    color: ${({ theme }) => theme.neutral.p1} !important;
  }

  @media (max-width: 1400px) {
    padding: ${buttonSizes.low};
    margin: 48px 0px;
  }

  @media (max-width: 768px) {
    padding: ${buttonSizes.medium};
    margin: 48px 0px;
  }

  @media (max-width: 500px) {
    padding: ${buttonSizes.low};
    margin: 32px 0px;
  }
`;
