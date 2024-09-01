import styled from "styled-components";

export const UpdateSection = styled.section`
  .advice {
    margin-bottom: 24px;
    color: #d2122e;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
      p {
        font-size: 14px;
      }

      gap: 2px;
      display: flex;
      flex-direction: column;
    }
  }

  button {
    margin-top: 12px;
  }
`;
