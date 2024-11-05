import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 420px;
  height: 80vh;
  border-radius: 8px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 4px;
  border-radius: 8px;

  img {
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
  }

  video {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  background-color: ${({ theme }) => theme.neutral.c2};

  .inputContainer {
    height: 100%;
    background-color: ${({ theme }) => theme.neutral.c2};
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 24px;

    padding: 4px;

    .cancelImageButton {
      background-color: ${({ theme }) => theme.yellow.light};
      border: none;
      padding: 4px;
      border-radius: 4px;

      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.yellow.dark};
      }
    }

    .postButton {
      padding: 4px;
      background-color: green;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      color: #fff;
      background-color: ${({ theme }) => theme.purple.medium};
    }
  }
`;

export const InputFileModalStorie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  flex-grow: 1;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ theme }) => theme.neutral.c2};

  color: ${({ theme }) => theme.neutral.c8};

  padding: 10px 20px;
  border-width: 4px;

  transition: background-color 0.3s ease;

  cursor: pointer;
  div {
    border: 3px dashed ${({ theme }) => theme.neutral.c8};
    padding: 8px 4px;
  }

  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
