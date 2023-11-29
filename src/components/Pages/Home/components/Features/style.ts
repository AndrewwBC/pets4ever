import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background: ${({ theme }) => theme.primary.p2};
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/4;
  margin-top: 80px;
  padding-bottom: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.primary.p4};

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.primary.p6};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 24px;
    color: ${({ theme }) => theme.primary.p4};
  }
`;

export const Infos = styled.div`
  grid-column: 2/8;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.primary.p4};

  .infoContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 32px;
      font-size: 32px;
      font-weight: 500;
      color: ${({ theme }) => theme.primary.p6};
    }
  }
  .iconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary.p1};

    p {
      font-size: 18px;
      margin-top: 32px;
      font-weight: 500;
      color: ${({ theme }) => theme.primary.p5};
    }
  }
`;
