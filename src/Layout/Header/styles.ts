import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.bg};
  position: relative;
  width: calc(100vw - 18px);
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;

  @media (max-width: 1400px) {
    padding: 0px 0px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }

  a {
    display: block;
    margin: 0 auto;
    max-width: max-content;
  }

  h1 {
    color: ${({ theme }) => theme.neutral.c8};
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .deskMenu {
    @media (max-width: 600px) {
      display: none;
    }
  }

  nav menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .menuItems li {
    cursor: pointer;
    font-size: 18px;
    color: ${({ theme }) => theme.neutral.c9};

    a {
      display: block;
      padding: 6px 16px;
      border-radius: 4px;

      color: inherit;

      &:active {
        color: ${({ theme }) => theme.neutral.c1};
      }

      &:hover {
        background-color: ${({ theme }) => theme.yellow.dark};
        transition: all 0.2s;
      }

      @media (max-width: 1400px) {
        font-size: 16px;
        padding: 8px 12px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 10px;
      }
    }
  }
`;

export const HandleMenuMobileContainer = styled.div`
  justify-self: end;
  //padding: 8px 24px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const ToggleButton = styled.button`
  display: block;
  padding: 8px;
  background-color: ${({ theme }) => theme.yellow.dark};
  border-radius: 8px;
  border: none;
`;
