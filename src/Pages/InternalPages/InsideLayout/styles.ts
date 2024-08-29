import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100%;
  width: calc(100vw - 18px);
  position: relative;

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
  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.neutral.c5};
  position: fixed;
  width: 240px;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  transition: all 0.3s;

  @media (max-width: 1000px) {
    width: 64px;
    display: flex;
    justify-content: center;

    p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    transition: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100vw;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid black;
  }
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  padding: 0px 24px;

  @media (max-width: 764px) {
    height: 100%;
    padding: 0px;
    justify-content: center;
    align-items: center;

    img {
      size: 24px !important;
    }
  }

  .pets4EverTitle {
    display: block;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.neutral.c9};
    margin: 64px 0;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .menuContent {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    flex-wrap: wrap;
    transition: all 0.3s;

    @media (max-width: 768px) {
      flex-direction: row;
      gap: 32px;
      li {
        width: max-content !important;
      }
    }

    @media (max-width: 460px) {
      gap: 8px;
    }

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
      font-size: 16px;
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
