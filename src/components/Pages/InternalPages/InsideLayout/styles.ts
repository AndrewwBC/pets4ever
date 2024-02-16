import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100%;
  width: 100%;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  height: 100vh;
  position: relative;

  .outletContainer {
    grid-column: 2/-1;
    margin-top: 80px;
    margin-left: 120px;
  }
`;

export const MenuContainer = styled.div`
  background: #f2f2f2;
  box-shadow: 6px 6px 12px #bfbfbf, -6px -6px 12px #f2f2f2;
  position: fixed;
  top: 0;
  right: 66%;
  bottom: 0;
  left: 0;
  min-width: max-content;
  z-index: 1;

  .menuContent {
    margin-top: 80px;
    margin-left: 40px;
  }
`;
