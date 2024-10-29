import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 125%; /* 1:1 Aspect Ratio */
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 75%; /* Alterar a proporção para telas menores */
  }

  img,
  video {
    position: absolute;
    border-radius: 4px;
    cursor: pointer;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
