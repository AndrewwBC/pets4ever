import styled from "styled-components";

export const TextGoogleAndForm = styled.div`
  margin-top: 64px;

  padding: 0 40px;
  max-width: 600px;

  width: 100%;

  .text {
    text-align: center;
    h1 {
      margin-bottom: 12px;
      color: ${({ theme }) => theme.neutral.c9};
      font-size: 24px;
    }

    p {
      color: ${({ theme }) => theme.neutral.c5};
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 120px;
    padding: 0 64px;
    padding-bottom: 48px;
  }
`;
