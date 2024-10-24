import styled from "styled-components";

export const Container = styled.div`
  header {
    padding-bottom: 12px;
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

    .icon {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    span,
    p {
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme.neutral.c8};
    }
  }

  .storiesContainer {
    padding-bottom: 32px;

    .eachStorie {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 14px;
        color: ${({ theme }) => theme.neutral.c8};
      }
    }

    img {
      height: 48px;
      width: 48px;
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
