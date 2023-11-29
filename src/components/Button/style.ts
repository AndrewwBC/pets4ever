import styled from "styled-components";

export const MyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 64px;

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
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.6;
    color: ${({ theme }) => theme.primary.p4};
  }

  @media (max-width: 768px) {
    padding: 8px 64px;
    margin: 64px 0px;
  }
`;
