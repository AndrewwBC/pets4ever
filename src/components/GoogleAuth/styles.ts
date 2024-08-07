import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;
  margin: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.neutral.c4};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .loginWithGoogle {
    span {
      color: ${({ theme }) => theme.neutral.c9};
    }

    display: flex;
    align-items: "center";
    justify-content: center;
    gap: 12px;
    border: 1px solid ${({ theme }) => theme.neutral.c4};
    border-radius: 4px;
    padding: 4px 8px;
    font-weight: 600;
    width: 100%;
    transition: 0.3s;
    &:hover {
      border: 1px solid ${({ theme }) => theme.neutral.c9};
    }
  }
`;
