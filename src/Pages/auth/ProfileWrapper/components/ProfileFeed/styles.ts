import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  padding: 40px;
  width: 100%;

  .profileFeedContent {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    margin-left: 64px;

    gap: 2px;
  }
`;

export const EachRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: stretch;
  max-height: 240px;
  height: 240px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
