import styled from "styled-components";

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 4px;
  background: ${({ theme }) => theme.neutral.c1};
  box-shadow: 1px 6px 6px #bfbfbf, -1px -6px 12px ${({ theme }) => theme.bg};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 32px;

  header {
    border-right: 2px solid grey;
    height: 100%;

    nav {
      padding: 8px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      li {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  form {
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 12px 0px;

    p {
      color: red;
      font-size: 18px;
      margin-bottom: 24px;
    }

    button {
      align-self: start;
    }

    label {
      display: flex;
      flex-direction: column;

      input {
        background-color: #b9b9b9;
        max-width: max-content;
        padding: 4px 12px;
        border-radius: 4px;
        margin-bottom: 16px;

        &::placeholder {
          color: #444;
        }
      }
    }
  }
`;

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
