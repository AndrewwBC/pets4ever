import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  gap: 44px;

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
    flex-direction: row;
    gap: 6px;
    cursor: pointer;

    p {
      font-weight: 700;
    }
  }
`;
