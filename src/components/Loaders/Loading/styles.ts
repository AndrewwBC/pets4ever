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
  z-index: 999999;
`;

export const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #ddd #222;
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 999px;
  -webkit-animation: spin 4s infinite;
  animation: spin 2s infinite;
  z-index: 99999;

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
