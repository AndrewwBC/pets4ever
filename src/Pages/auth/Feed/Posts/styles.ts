import styled from "styled-components";

export const PostsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
  margin-top: 24px;
  width: 100%;
  flex-grow: 1;

  .eachPost {
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.neutral.c5};
    background-color: ${({ theme }) => theme.bg};

    &:nth-child(n + 2) {
      padding-top: 24px;
    }
  }

  .postHeader div {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 18px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    span {
      color: ${({ theme }) => theme.neutral.c9};
      font-weight: 500;
    }

    p {
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    img {
      border-radius: 9999px;
      object-fit: cover;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f9f9f9;
    border-radius: 20px;
    border: 3px solid #a9a9a9;
  }

  .imageContainer {
    width: 100%;
    height: 0;
    padding-bottom: 100%; /* 1:1 Aspect Ratio */
    position: relative;

    @media (max-width: 768px) {
      padding-bottom: 75%; /* Alterar a proporção para telas menores */
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .postInfoAndStatus {
    max-width: 100%;
    padding: 12px 0;

    @media (max-width: 500px) {
      padding: 8px;
    }

    .iconsContainerAndCreatedAt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;

      .icons {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: flex-start;
        color: ${({ theme }) => theme.neutral.c9};
      }

      .createdAt {
        small {
          color: ${({ theme }) => theme.neutral.c6};
          letter-spacing: 0.4px;

          @media (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }

    .quantityOfLikesContainer {
      small {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.neutral.c8};
      }
    }

    .nameAndDescription {
      white-space: normal;
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 18px;
      gap: 32px;

      .name {
        color: ${({ theme }) => theme.neutral.c6};
      }

      small {
        display: block;
        font-size: 16px;
        color: ${({ theme }) => theme.neutral.c9};
        max-width: 260px;
      }
    }
  }
`;
