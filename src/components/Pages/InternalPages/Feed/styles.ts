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

export const FeedFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .storiesContent {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    img {
      flex-grow: 1;
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
