import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  max-width: 1000px;
  margin-left: 200px;
  width: 100%;

  .profileFeedContent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: start;
    justify-content: start;
    width: 100%;

    gap: 8px;

    .eachImg {
      img {
        height: 200px;
        width: 300px;
        display: block;
        object-fit: cover;
        transition: all 0.6s;
        &:hover {
          scale: 1.1;
        }
      }
    }
  }
`;
