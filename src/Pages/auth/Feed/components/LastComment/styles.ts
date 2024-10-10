import styled from "styled-components";

export const Container = styled.div`
  .content {
    background-color: ${({ theme }) => theme.purple.dark};
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    gap: 8px;
    color: ${({ theme }) => theme.neutral.c4};
    a {
      font-family: "Roboto";
      font-size: 16px;
      color: ${({ theme }) => theme.neutral.c1};
    }
  }
`;
