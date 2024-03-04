import styled from "styled-components";

export const Modal = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.section`
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 12px;
    width: 540px;
    height: 720px;
    object-fit: fill;
  }

  .userActions {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    bottom: 0;
    right: 0;
    flex-grow: 1;

    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px 24px;
    gap: 32px;
  }
`;
