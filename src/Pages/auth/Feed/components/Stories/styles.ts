import styled from "styled-components";

export const Container = styled.div`
  header {
    padding-bottom: 12px;
    display: flex;
    justify-content: start;
    span {
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
