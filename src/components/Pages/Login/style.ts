import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.neutral.c1};
`;

// const borderAnimation = keyframes`

//   0% {
//     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
//   }
//   25% {
//     box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.7);
//   }
//   50% {
//     box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.7);
//   }
//   75% {
//     box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.7);
//   }
//   100% {
//     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
//   }

//   `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 160px 0px 80px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 16px 12px;

  h1 {
    font-size: 42px;
  }

  p {
    margin-top: 12px;
  }

  @media (max-width: 1400px) {
    margin: 100px 0px 80px;

    h1 {
      font-family: "Poppins";
      font-size: 32px;
      color: #222;
    }
  }

  .forgotPassword {
    margin: 0px 0px;
    font-size: 16px;
    align-self: flex-end;
    color: ${({ theme }) => theme.purple.medium};
    font-family: "Roboto", sans-serif;

    &:hover {
      color: ${({ theme }) => theme.purple.dark};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 42px;

  input {
    margin-bottom: 4px;
  }

  button {
    margin-top: 38px;
  }
`;
