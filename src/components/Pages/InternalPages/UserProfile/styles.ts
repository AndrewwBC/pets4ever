import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  .userContent {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userImageAndName {
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .userStats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    small,
    p {
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
  }
`;
