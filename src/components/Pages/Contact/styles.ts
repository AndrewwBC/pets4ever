import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.neutral.c1};
  height: 100vh;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const textAnimation = keyframes`
  from {
    transform: translate3d(0px, -32px, 0px);
  } to {
    transform: translate3d(0px, 0px, 0px);
  }
`;

export const Intro = styled.div`
  padding: 48px;

  span {
    color: #7b55fa;
  }

  div {
    h1 {
      color: ${({ theme }) => theme.neutral.c8};
      font-size: 48px;
      font-weight: 600;
      line-height: 1.2;
      transition: all 0.6s;
      animation-name: ${textAnimation};
      animation-duration: 0.6s;
      animation-iteration-count: linear;

      @media (max-width: 1400px) {
        font-size: 32px;
      }
    }
  }
`;
