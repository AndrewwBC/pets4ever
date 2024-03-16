import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100vh;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  .outletContainer {
    grid-column: 1/-1;
    margin-top: 32px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.neutral.c2};
  box-shadow: 1px 2px 6px #888, -1px -6px 12px ${({ theme }) => theme.bg};
  grid-column: 1/-1;
  padding: 8px 0px;

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
      background-color: ${({ theme }) => theme.yellow.light};
      border-radius: 16px;
      padding: 4px 40px 4px 8px;
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
        background-color: #000;
        * {
          transition: all 0.1s;
        }
      }
    }
  }
`;
