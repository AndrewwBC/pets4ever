import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .content {
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    gap: 8px;
    border-radius: 8px;
    z-index: 999;
  }

  .user {
    border-radius: 8px;
    padding: 4px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
    align-items: center;
    flex-direction: row;
    justify-content: start;
    gap: 12px;
    max-width: 320px;
    width: 320px;
    min-width: 120px;

    img {
      height: 48px;
      width: 48px;
      border-radius: 9999px;
      object-fit: cover;
    }
  }
`;
