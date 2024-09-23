import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;

  .fullname {
    color: ${({ theme }) => theme.neutral.c9};
    font-weight: 400;
    font-size: 18px;
  }
`;
