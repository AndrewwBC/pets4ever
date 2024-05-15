import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100vh;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  .outletContainer {
    grid-column: 1/-1;
    margin-top: 32px;
  }
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.neutral.c2};
  box-shadow: 1px 2px 6px #888, -1px -6px 12px ${({ theme }) => theme.bg};
  grid-column: 1/-1;
  padding: 8px 0px;
`;

export const HeaderContent = styled.div`
  grid-column: 1/-1;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .pets4EverTitle {
    justify-self: center;
  }

  .menuContent {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;

    a {
      display: flex;
      border-radius: 4px;
      padding: 8px;
      align-items: center;
      gap: 12px;
      color: ${({ theme }) => theme.neutral.c9};
      font-size: 14px;
      transition: all 0.3s;

      @media (max-width: 1000px) {
        padding-right: 12px;
      }

      * {
        color: #f9f9f9;
      }

      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme.yellow.dark};
        * {
          transition: all 0.1s;
        }
      }
    }
  }
`;
