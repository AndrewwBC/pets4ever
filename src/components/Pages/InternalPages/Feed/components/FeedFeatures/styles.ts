import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.neutral.c6};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  h1 {
    color: ${({ theme }) => theme.yellow.light};
    font-size: 16px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 2px 80px;
  }
`;

export const SuggestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .userSuggestedPictureAndName {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 18px;
    color: white;

    img {
      border-radius: 9999px;
    }
  }
`;

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .storiesContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    img {
      height: 48px;
      width: 48px;
      border-radius: 999999px;
      cursor: pointer;
      transition: 0.3s;
      border: 2px solid transparent;

      &:hover {
        border: 2px solid black;
      }
    }
  }
`;

export const MessagesContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
