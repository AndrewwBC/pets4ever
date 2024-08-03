import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.neutral.c2};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;

  gap: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 32px;
    padding-bottom: 12px;

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
  .postHeader div {
    display: flex;
    align-items: center;
    padding: 4px;
    gap: 8px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: ${({ theme }) => theme.neutral.c1};
    box-shadow: 1px 6px 6px #bfbfbf, -1px -6px 12px ${({ theme }) => theme.bg};

    p {
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    img {
      border-radius: 9999px;
    }
  }

  .imagesContainer {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 48px;
    margin-top: 6px;

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
      height: 600px;
      width: 520px;

      @media (max-width: 1600px) {
        height: 400px;
      }

      @media (max-width: 500px) {
        height: 340px;
        width: 360px;
      }
    }

    img {
      object-fit: cover;
    }

    .postInfoAndStatus {
      max-width: 100%;
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
          color: #222;
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
        }
      }

      .nameAndDescription {
        white-space: normal;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 18px;
        margin-left: 16px;
        gap: 32px;

        p {
          color: ${({ theme }) => theme.neutral.c6};
        }

        small {
          display: block;
          font-size: 16px;
          color: ${({ theme }) => theme.neutral.c9};
          max-width: 260px;
        }
      }

      padding: 12px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      background: ${({ theme }) => theme.neutral.c1};
      box-shadow: 1px 6px 6px #bfbfbf, -1px -6px 12px ${({ theme }) => theme.bg};
    }
  }
`;
