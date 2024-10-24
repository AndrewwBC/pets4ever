import styled from "styled-components";

export const Container = styled.div`
  .content {
    background-color: ${({ theme }) => theme.yellow.dark};
    padding: 4px;
    border-radius: 8px;
    display: flex;
    align-items: start;
    justify-content: start;
    margin-top: 16px;
    gap: 8px;
    color: ${({ theme }) => theme.neutral.c8};
    font-size: 14px;

    .link {
      font-family: "Roboto";
      color: ${({ theme }) => theme.neutral.c8};
    }
  }
`;
