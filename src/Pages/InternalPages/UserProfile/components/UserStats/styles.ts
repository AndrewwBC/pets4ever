import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  small,
  p {
    color: ${({ theme }) => theme.neutral.c9};
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
  }
`;
