import styled from "styled-components";

export const TextContainer = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.neutral.c8};

  span {
    color: #7b55fa;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  cursor: pointer;

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

export const SectionText = styled.section`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(249, 249, 249);
  background: linear-gradient(
    90deg,
    rgba(249, 249, 249, 1) 50%,
    ${({ theme }) => theme.purple.medium} 50%
  );
  gap: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    background: ${({ theme }) => theme.purple.medium};
  }

  .motivation {
    text-align: end;
    font-size: 48px;
    color: #222;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
      margin-bottom: 48px;
    }
  }

  .listContainer {
    ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
      @media (max-width: 768px) {
        padding: 12px;
        gap: 12px;
      }
    }
    li {
      list-style: inside;
      color: #e9e9e9;
      font-size: 18px;
      text-align: justify;
    }
  }
`;
