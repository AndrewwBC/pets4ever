import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 80px;
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
  flex-wrap: wrap;
  flex-direction: column;
  gap: 32px;
  padding: 48px;

  @media (max-width: 768px) {
    padding: 0px;
    padding-top: 48px;
    margin: 0 24px;
    align-items: center;
    height: 100vh;
  }

  div {
    .mobTitle {
      display: none;
    }
    @media (max-width: 600px) {
      .webTitle {
        display: none;
      }
      .mobTitle {
        display: block;
      }
    }

    h1 {
      color: ${({ theme }) => theme.neutral.c8};
      font-size: 48px;
      font-weight: 600;
      line-height: 1.3;
      transition: all 0.6s;
      animation-name: ${textAnimation};
      animation-duration: 0.6s;
      animation-iteration-count: linear;
      text-align: justify;

      @media (max-width: 1400px) {
        font-size: 40px;
      }

      @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 24px;
        text-align: center;
      }
    }
  }
`;
