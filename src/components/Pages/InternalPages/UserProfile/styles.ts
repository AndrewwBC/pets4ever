import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 64px;
  .userContent {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userImageAndName {
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: 9999px;
      object-fit: cover;
    }
  }

  .userStats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    small,
    p {
      font-family: "Nunito";
      font-size: 16px;
      font-weight: 500;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
    }
  }
`;

export const ProfileFeed = styled.section`
  margin-top: 80px;

  .profileFeedContent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
