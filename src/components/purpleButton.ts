import styled from "styled-components";

export const PurpleButton = styled.button`
  background-color: ${({ theme }) => theme.purple.medium};
  font-size: 14px;
  border: none;
  padding: 4px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.neutral.c2};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.purple.light};
  }
`;
