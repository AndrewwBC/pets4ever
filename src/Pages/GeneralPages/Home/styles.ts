import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }

  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 600px) {
      max-height: 200px;
      object-fit: cover;
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
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 48px;

  @media (max-width: 600px) {
    padding: 24px;
  }

  div {
    h1 {
      color: ${({ theme }) => theme.neutral.c8};
      font-size: 48px;
      font-weight: 600;
      line-height: 1.3;
      transition: all 0.6s;
      animation-name: ${textAnimation};
      animation-duration: 0.6s;
      animation-iteration-count: linear;

      @media (max-width: 1400px) {
        margin-top: 120px;
        font-size: 48px;
      }

      @media (max-width: 764px) {
        font-size: 40px;
      }
    }

    p {
      margin: 72px 0px;
      font-weight: 500;
      color: ${({ theme }) => theme.neutral.c6};
      font-size: 20px;
    }
  }
`;

const buttonColorAnimation = keyframes`
  from {
    background-color: #eee;
  } to {
    background-color: #e6bb00;
    scale: 1.02;
  }
`;

const buttonTextColorAnimation = keyframes`
  from {
    color: #562D1D;
  } to {
    color: #222;
  }
`;

export const ButtonContainer = styled.div`
  max-width: max-content;

  @media (max-width: 764px) {
    place-self: center;
    align-self: flex-start;
  }

  border-bottom: 1px solid ${({ theme }) => theme.neutral.c2};

  button {
    animation: ${buttonColorAnimation} 1s alternate infinite ease-in-out;
    span {
      color: red;
      animation: ${buttonTextColorAnimation} 1s alternate infinite ease-in-out;
    }
  }
`;
