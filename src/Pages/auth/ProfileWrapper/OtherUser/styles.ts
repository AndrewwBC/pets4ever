import styled from "styled-components";

export const FullnameNumbersAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .fullname {
    color: ${({ theme }) => theme.neutral.c9};
    font-weight: 400;
    font-size: 18px;
  }
`;

export const FollowButtonAndNumbers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
