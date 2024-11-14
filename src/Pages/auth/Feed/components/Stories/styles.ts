import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  header {
    padding-bottom: 8px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;

    .gradient {
      height: 2px;
      border-radius: 8px;
      background: rgb(213, 180, 226);
      background: -moz-linear-gradient(
        90deg,
        rgba(213, 180, 226, 1) 15%,
        rgba(138, 5, 190, 1) 50%,
        rgba(213, 180, 226, 1) 85%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(213, 180, 226, 1) 15%,
        rgba(138, 5, 190, 1) 50%,
        rgba(213, 180, 226, 1) 85%
      );
      background: linear-gradient(
        90deg,
        rgba(213, 180, 226, 1) 15%,
        rgba(138, 5, 190, 1) 50%,
        rgba(213, 180, 226, 1) 85%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d5b4e2",endColorstr="#d5b4e2",GradientType=1);
    }

    .new {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      .icon {
        color: ${({ theme }) => theme.neutral.c8};
      }
    }

    span,
    p {
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme.neutral.c8};
    }
  }

  .storiesContainer {
    display: flex;
    padding: 4px;

    @media (max-width: 768px) {
      width: 100%;
    }

    .eachStorie {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      max-width: max-content;

      span {
        font-size: 14px;
        color: ${({ theme }) => theme.neutral.c9};

        @media (max-width: 500px) {
          font-size: 10px;
        }
      }
    }

    img {
      height: 60px;
      width: 60px;

      @media (max-width: 768px) {
        height: 40px;
        width: 40px;
      }

      border-radius: 999999px;
      cursor: pointer;
      transition: 0.3s;
      border: 2px solid transparent;
      object-fit: cover;

      &:hover {
        border: 2px solid black;
      }
    }
  }
`;

const loader = keyframes`
  0% {
    background-color: #f6bb00;
  } 50% {
    background-color: #ffa000;
 } 100% {
  background-color: #f6bb00;
 }
 `;

export const CreateStatusContainer = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${loader} 2s infinite ease-in-out;
    border-radius: 4px;
    margin-top: 12px;
    gap: 8px;
  }

  .message {
    font-size: 16px;
    color: ${({ theme }) => theme.neutral.c2};
  }
`;

export const SuccessStatusContainer = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00cc00;
    border-radius: 4px;
    margin-top: 12px;
    gap: 8px;
  }

  .message {
    font-size: 16px;
    color: ${({ theme }) => theme.neutral.c2};
  }
`;
