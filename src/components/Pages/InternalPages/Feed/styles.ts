import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;

  gap: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-bottom: 12px;

    span {
      font-weight: 700;
      font-size: 18px;
    }

    .menuHeader {
      display: flex;
      flex-direction: row;
      gap: 16px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const HeaderAndPhoto = styled.section`
  background: ${({ theme }) => theme.bg};
  grid-column: 2/3;
  .postHeader div {
    display: flex;
    align-items: center;
    padding: 8px 4px;
    gap: 8px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: ${({ theme }) => theme.neutral.c1};
    box-shadow: 1px 6px 6px #bfbfbf, -1px -6px 12px ${({ theme }) => theme.bg};

    img {
      border-radius: 9999px;
    }
  }

  .imagesContainer {
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
        height: 420px;
      }
    }

    img {
      object-fit: cover;
    }

    .userInfo {
      .iconsContainerAndCreatedAt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

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
          }
        }
      }

      .nameAndDescription {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 32px;
        margin-left: 16px;
        gap: 32px;

        p {
          color: ${({ theme }) => theme.neutral.c6};
        }

        small {
          font-size: 16px;
          color: ${({ theme }) => theme.neutral.c9};
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
