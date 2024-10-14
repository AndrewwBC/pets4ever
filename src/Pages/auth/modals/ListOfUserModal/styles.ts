import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.neutral.c2};
  gap: 8px;
  border-radius: 8px;
  z-index: 999;
  max-height: 400px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background: #222;
    border-radius: 10px;
  }

  .title {
    text-align: center;
    color: ${({ theme }) => theme.neutral.c8};
    font-weight: 500;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .user {
    border-radius: 8px;
    padding: 4px;
    display: flex;
    background-color: ${({ theme }) => theme.neutral.c3};
    color: ${({ theme }) => theme.neutral.c8};
    align-items: center;
    flex-direction: row;
    justify-content: start;
    gap: 12px;
    max-width: 320px;
    width: 320px;
    min-width: 120px;

    img {
      height: 48px;
      width: 48px;
      border-radius: 9999px;
      object-fit: cover;
    }
  }
`;
