import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  align-items: start;
  max-width: 1400px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menuHeader {
      display: flex;
      flex-direction: row;
      gap: 16px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const HeaderAndPhoto = styled.section`
  background: ${({ theme }) => theme.bg};

  .imagesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 32px;
    justify-content: start;

    img {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      object-fit: cover;
    }

    .userInfo {
      .iconsContainerAndCreatedAt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .icons {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: flex-start;
          color: #222;
        }

        .createdAt {
          small {
            color: ${({ theme }) => theme.neutral.c6};
            letter-spacing: 0.4px;
          }
        }
      }

      .nameAndDescription {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 32px;
        margin-left: 16px;
        gap: 32px;

        p {
          color: ${({ theme }) => theme.neutral.c6};
        }

        small {
          font-size: 16px;
          color: ${({ theme }) => theme.neutral.c9};
        }
      }

      padding: 12px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      background: ${({ theme }) => theme.bg};
      box-shadow: 1px 6px 12px #bfbfbf,
        -1px -6px 12px ${({ theme }) => theme.bg};
    }
  }
`;

export const FeedFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  h1 {
    color: ${({ theme }) => theme.purple.dark};
  }

  .storiesContent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    max-width: 400px;
    overflow-x: scroll;

    img {
      height: 280px;
      object-fit: cover;
      border-radius: 16px;
      cursor: pointer;
      transition: 0.3s;
      border: 2px solid transparent;

      &:hover {
        border: 2px solid black;
      }
    }
  }
`;

export const SuggestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-size: 24px;
  }

  .userSuggestedPictureAndName {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
  }
`;
