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
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  flex-direction: column;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-left: 8px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.neutral.c8};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.neutral.c4};
    border-radius: 4px;
  }

  .storiesContent {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
    gap: 12px;
    width: initial;

    margin-right: 8px;

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
