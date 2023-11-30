import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.primary.p5};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;

  a {
    display: block;
    margin: 0 auto;
    max-width: max-content;
  }

  h1 {
    color: ${({ theme }) => theme.neutral.c8};
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  nav menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .menuItems li {
    cursor: pointer;
    font-size: 18px;
    border-radius: 8px;
    background-color: #e6bb52;
    color: #222;

    a {
      display: block;
      padding: 8px 16px;
      border-radius: 8px;

      &:hover {
        background-color: #e6cc22;
        transition: all 0.3s;
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 12px;
      font-size: 12px;
    }
  }

  .menuItems li:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.neutral.c1};
  }
`;
