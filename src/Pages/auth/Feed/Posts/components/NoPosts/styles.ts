import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin: 80px;

    small {
      font-size: 18px;
      color: ${({ theme }) => theme.neutral.c6};
      font-weight: 400;
    }
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.neutral.c9};
      font-weight: 600;
      font-family: "Poppins";
    }
  }
`;
