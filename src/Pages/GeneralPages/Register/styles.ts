import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .formAndText {
    padding: 0 40px;
    max-width: 600px;
    place-self: center;
    width: 100%;

    .text {
      h1 {
        margin-bottom: 16px;
        color: ${({ theme }) => theme.neutral.c9};
        font-size: 32px;
      }

      p {
        color: ${({ theme }) => theme.neutral.c5};
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 120px;
      padding: 0 64px;
    }
  }

  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
      max-height: 200px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
      max-width: none;
      margin-top: 16px;
      width: 100%;
    }
  }

  .validationInfo {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    text-align: start;
    padding: 8px;
    border-radius: 8px;

    .validations {
      display: flex;
      flex-direction: column;
      gap: 8px;

      div {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
      }

      span {
        display: block;
        margin-left: 12px;
        font-size: 14px;
        color: ${({ theme }) => theme.neutral.c9};
      }
    }
  }
`;
