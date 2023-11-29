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
    
  }
`;

export const Intro = styled.div`
  padding: 80px;

  div {
    h1 {
      color: ${({ theme }) => theme.neutral.c8};
      font-size: 48px;
      font-weight: 600;
      line-height: 1.2;
      transition: all 0.6s;

      @media (max-width: 1200px) {
        font-size: 32px;
      }
    }

    p {
      margin-top: 72px;
      font-weight: 500;
      color: ${({ theme }) => theme.primary.p4};
      font-size: 18px;

      @media (max-width: 1000px) {
        margin-top: 24px;
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    button {
      margin: 80px 0px;
    }
  }
`;

export const ButtonContainer = styled.div`
  max-width: max-content;
  border-bottom: 1px solid ${({ theme }) => theme.primary.p4};
`;