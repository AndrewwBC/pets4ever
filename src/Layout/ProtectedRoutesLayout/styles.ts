import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .outletContainer {
    min-height: 100vh;
    --nav-narrow-width: 72px;
    --nav-medium-width: 244px;
    --nav-wide-width: 335px;
    @media (max-width: 1920px) {
      width: calc(100% - var(--nav-wide-width));
    }

    @media (min-width: 1264px) and (max-width: 1919px) {
      width: calc(100% - var(--nav-medium-width));
    }

    @media (min-width: 768px) and (max-width: 1263px) {
      width: calc(100% - var(--nav-narrow-width));
    }

    @media (max-width: 768px) {
      max-width: 630px;
      width: 100%;
    }

    margin-top: 64px;
  }
`;

export const SideMenu = styled.div`
  --nav-narrow-width: 72px;
  --nav-medium-width: 244px;
  --nav-wide-width: 335px;

  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.neutral.c5};
  position: fixed;
  border-radius: 0px;

  box-shadow: ${({ theme }) => theme.boxShadowStyle};

  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  transition: width 0.3s;

  @media (max-width: 1920px) {
    width: var(--nav-wide-width);
  }

  @media (min-width: 1264px) and (max-width: 1919px) {
    width: var(--nav-medium-width);
  }

  @media (min-width: 768px) and (max-width: 1263px) {
    width: var(--nav-narrow-width);
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }

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
    border-top: 1.4px solid ${({ theme }) => theme.neutral.c8};
  }
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  padding: 0px 24px;

  @media (min-width: 768px) and (max-width: 1263px) {
    align-items: center;
    padding: 0px;
  }

  @media (max-width: 768px) {
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

    @media (max-width: 1263px) {
      display: none;
    }
  }

  .menuContent {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 24px;
    flex-wrap: wrap;

    @media (max-width: 1263px) {
      margin-top: 48px;
      align-items: center;
      p {
        display: none;
      }
    }

    @media (max-width: 768px) {
      margin: 0;
      width: 100vw;
      padding: 0px 24px;
      flex-direction: row;
      gap: 4px;
      li {
        width: max-content !important;
      }
    }

    @media (max-width: 400px) {
      li {
        width: 42px !important;
      }
    }

    li {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;

      p {
        margin-top: 2px;
      }
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
