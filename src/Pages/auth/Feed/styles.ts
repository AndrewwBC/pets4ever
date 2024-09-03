import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  height: 100%;
  margin-bottom: 120px;
  background-color: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    width: 100%;
  }

  gap: 16px;
`;

export const Content = styled.div`
  max-width: 630px;
  width: 100%;
`;
