import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.primary.p5};
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
      margin-top: -72px;
      font-weight: 600;
      line-height: 1.2;
      transition: all 0.6s;
      animation-name: ${textAnimation};
      animation-duration: 0.6s;
      animation-iteration-count: linear;

      @media (max-width: 1200px) {
        font-size: 32px;
      }
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  #arrowAnim {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    width: 100px;
    height: 100px;
    border: 2.5px solid;
    border-color: black transparent transparent black;
    transform: rotate(-135deg);
  }

  .arrowSliding {
    position: absolute;
    -webkit-animation: slide 4s linear infinite;
    animation: slide 4s linear infinite;
  }

  .delay1 {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .delay2 {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }
  .delay3 {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    20% {
      opacity: 1;
      transform: translateY(20px);
    }
    80% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(60px);
    }
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    20% {
      opacity: 1;
      transform: translateY(20px);
    }
    80% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(60px);
    }
  }
`;
