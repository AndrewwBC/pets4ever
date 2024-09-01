import styled, { keyframes } from "styled-components";

export const Paragraph = styled.p`
  margin: 72px 24px 0px 0px;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral.c6};
  font-size: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const buttonColorAnimation = keyframes`
  from {
    background-color: #eee;
  } to {
    background-color: #e6bb00;
    scale: 1.02;
  }
`;

const buttonTextColorAnimation = keyframes`
  from {
    color: #562D1D;
  } to {
    color: #222;
  }
`;

export const ButtonContainer = styled.div`
  max-width: max-content;
  border-bottom: 1px solid ${({ theme }) => theme.neutral.c2};

  button {
    animation: ${buttonColorAnimation} 1s alternate infinite ease-in-out;
    span {
      color: red;
      animation: ${buttonTextColorAnimation} 1s alternate infinite ease-in-out;
    }
  }
`;
