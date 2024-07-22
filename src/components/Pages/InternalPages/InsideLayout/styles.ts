import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.neutral.c2};
  height: 100vh;
  width: calc(100vw - 18px);

  @media (max-width: 768px) {
    width: 100vw;
  }
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
  flex-wrap: wrap;

  .pets4EverTitle {
    justify-self: center;
    font-size: 28px;
    font-weight: 600;
    color: #222;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .menuContent {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    flex-wrap: wrap;

    li {
      display: block;
    }

    a {
      display: flex;
      border-radius: 4px;
      padding: 8px;
      align-items: center;
      gap: 12px;
      color: ${({ theme }) => theme.neutral.c9};
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s;

      @media (max-width: 1000px) {
        padding-right: 12px;
      }

      @media (max-width: 500px) {
        font-size: 12px;
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
