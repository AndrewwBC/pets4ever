import styled from "styled-components";

export const Container = styled.div`
  .content {
    background-color: ${({ theme }) => theme.neutral.c3};
    padding: 6px;
    border-radius: 8px;
    display: flex;
    margin-top: 16px;
    gap: 18px;

    p {
      font-size: 14px;
    }
  }
`;
