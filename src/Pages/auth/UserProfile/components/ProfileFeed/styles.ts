import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;

  .profileFeedContent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 8px;

    div {
      width: 100%;
      overflow: hidden;
      margin: 0;
      padding-top: 56.25%;
      position: relative;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      cursor: pointer;

      &:hover {
        scale: 1.01;
        transition: 0.3s;
      }
    }
  }
`;
