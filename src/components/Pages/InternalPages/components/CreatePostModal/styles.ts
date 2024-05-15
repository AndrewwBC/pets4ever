import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  form {
    background-color: #b9b9b9;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px 12px;
    border-radius: 4px;

    input {
      background-color: #fff;
      border-radius: 4px;
      padding: 8px;
    }
  }
`;
