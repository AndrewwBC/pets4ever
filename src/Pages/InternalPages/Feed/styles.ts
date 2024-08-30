import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  height: 100vw;

  gap: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;

    @media (max-width: 500px) {
      padding: 0 32px;
    }

    span {
      font-weight: 700;
      font-size: 18px;
    }

    .menuHeader {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex-grow: 1;
      align-items: end;
      justify-content: end;
      gap: 16px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const HeaderAndPhoto = styled.section`
  background: inherit;
  grid-column: 2/3;

  .postContainer {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .eachPost {
      padding-bottom: 24px;
      border-bottom: 1px solid ${({ theme }) => theme.neutral.c5};
      &:nth-child(n + 2) {
        padding-top: 24px;
      }

      background: ${({ theme }) => theme.neutral.c1};
    }

    .postHeader div {
      display: flex;
      align-items: center;
      padding: 8px 0px;
      gap: 18px;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      span {
        color: ${({ theme }) => theme.neutral.c9};
      }

      p {
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }

      img {
        border-radius: 9999px;
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

    .feedPhoto {
      width: 520px;

      @media (max-width: 1600px) {
        height: 400px;
      }

      @media (max-width: 500px) {
        height: 340px;
        width: 100vw;
      }
    }

    img {
      object-fit: cover;
    }

    .postInfoAndStatus {
      max-width: 100%;
      padding: 12px 0px;

      @media (max-width: 500px) {
        padding: 4px;
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
          font-weight: 600;
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
  }
`;
