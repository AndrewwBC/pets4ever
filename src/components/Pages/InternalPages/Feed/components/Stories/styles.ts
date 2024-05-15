import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-left: 8px;
  max-width: 520px;

  &::-webkit-scrollbar {
    width: 1px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f9f9f9;
    border-radius: 20px;
    border: 1px solid #a9a9a9;
  }

  header {
    padding-bottom: 12px;
    display: flex;
    justify-content: center;
    span {
      font-weight: 700;
      font-size: 18px;
    }
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
