import styled from "styled-components";

export const SuggestionContainer = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 12px;
  }

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
