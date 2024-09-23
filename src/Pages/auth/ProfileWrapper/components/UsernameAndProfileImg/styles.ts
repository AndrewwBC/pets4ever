import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img {
    height: 120px;
    width: 120px;

    @media (max-width: 500px) {
      height: 100px;
      width: 100px;
    }

    border-radius: 9999px;
    object-fit: cover;
  }

  span {
    font-weight: 500;
    font-family: "Poppins";
  }
`;
