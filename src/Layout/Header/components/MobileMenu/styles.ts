import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 56px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`;

export const Menu = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-end;
  padding: 12px;
  gap: 16px;

  li {
    background-color: ${({ theme }) => theme.neutral.c2};
    padding: 8px;
    width: 100%;
    height: max-content;
    border-radius: 8px;
  }

  li a {
    color: ${({ theme }) => theme.neutral.c8};
    font-weight: 700;
  }
`;
