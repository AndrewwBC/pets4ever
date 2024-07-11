import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Loader = styled.div`
  border-width: 0.5rem;
  margin-top: 400px;
  border-style: solid;
  border-color: purple purple purple purple;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;
  z-index: 99999;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: purple;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
