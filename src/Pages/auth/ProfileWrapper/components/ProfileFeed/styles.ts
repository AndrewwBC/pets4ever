import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  padding: 40px 0px;
  width: 100%;
  margin-left: 64px;
  border-top: 1px solid ${({ theme }) => theme.yellow.light};
  padding-bottom: 120px;

  @media (max-width: 1600px) {
    margin-left: 80px;
  }

  @media (max-width: 768px) {
    margin: 0px;
    margin-top: 32px;
  }

  .profileFeedContent {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 4px;
  }
`;

export const EachRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-auto-rows: 240px;
  width: 100%;
  gap: 8px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
