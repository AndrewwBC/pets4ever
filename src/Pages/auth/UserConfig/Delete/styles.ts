import styled from "styled-components";

export const DeleteSection = styled.form`
  padding: 24px 0px;
  label {
    display: block;
    margin-bottom: 24px;

    input {
      background: #999;
      margin-top: 8px;
      display: flex;
      border-radius: 4px;
      padding: 4px;
    }
  }

  p {
    color: red;
    margin-bottom: 4px;
    font-size: 18px;
  }

  button {
    margin-top: 0px;
  }
`;
