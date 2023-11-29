import styled from "styled-components";

const buttonSizes = {
  big: "16px 64px",
  medium: "12px 64px",
  low: "8px 64px",
};

export const MyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => buttonSizes[size]};

  border: none;
  border-radius: 4px;
  background-color: #e6bb52;
  max-width: max-content;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.neutral.c3};
  }

  span {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.6;
    color: ${({ theme }) => theme.primary.p4};
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
