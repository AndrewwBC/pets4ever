import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100%;
  width: 100%;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  height: 100vh;
  position: relative;

  .outletContainer {
    grid-column: 2/-1;
    margin-top: 80px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.yellow.light};
  box-shadow: 1px 6px 12px #888, -1px -6px 12px ${({ theme }) => theme.bg};
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  grid-column: 1/1;
  position: fixed;
  top: 0;
  right: 80%;
  bottom: 0;
  left: 0;
  min-width: max-content;
  z-index: 1;

  .pets4EverTitle {
    margin-top: 80px;
    justify-self: center;
  }

  .menuContent {
    display: flex;
    align-items: self-start;
    flex-direction: column;
    gap: 12px;
    margin-top: 80px;

    li:nth-child(1) {
      margin-bottom: 20px;
    }

    li {
      width: 100%;
    }
    a {
      display: flex;
      //  background-color: ${({ theme }) => theme.yellow.medium};
      background-color: #222;
      border-radius: 16px;
      padding: 8px 80px 8px 8px;
      align-items: center;
      gap: 12px;
      color: ${({ theme }) => theme.neutral.c2};
      font-size: 16px;
      transition: all 0.3s;

      @media (max-width: 1000px) {
        padding-right: 32px;
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
