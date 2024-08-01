import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.neutral.c2};
  width: calc(100vw - 18px);

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  .outletContainer {
    margin-top: 64px;
  }
`;

export const SideMenu = styled.div`
  background: ${({ theme }) => theme.neutral.c2};
  height: 100vh;
  border-right: 1px solid black;
  position: fixed;
  width: 240px;
  z-index: 999999;
  top: 0;
  left: 0;
  height: 100%;
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  padding: 0px 24px;

  @media (max-width: 764px) {
    padding: 0px 24px;
  }

  .pets4EverTitle {
    display: block;
    font-size: 24px;
    font-weight: 600;
    color: #222;
    margin: 64px 0;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .menuContent {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;

    li {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    a {
      background-color: transparent;
      border: none;
      padding: 4px 8px;
      display: flex;
      border-radius: 4px;
      align-items: center;
      gap: 12px;
      color: ${({ theme }) => theme.neutral.c9};
      font-size: 18px;
      font-weight: 500;
      transition: all 0.3s;
      width: 100%;

      @media (max-width: 1000px) {
        padding-right: 12px;
      }

      @media (max-width: 500px) {
        font-size: 14px;
      }

      &:hover {
        color: #222;
        background-color: ${({ theme }) => theme.yellow.dark};
        * {
          transition: all 0.1s;
        }
      }
    }
  }
`;
