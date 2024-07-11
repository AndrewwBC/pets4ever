import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10px;
`;

export const InputFileModal = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 400px;
  display: flex;
  padding: 10px 20px;
  border-width: 4px;
  color: black;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  div {
    border: 3px dashed #444;
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

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;

  .cancelImageButton {
    width: 100%;
    background-color: ${({ theme }) => theme.yellow.light};
    font-size: 18px;
    border: none;
    border-bottom-left-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.yellow.dark};
    }
  }

  .feedPhoto {
    height: 640px;
    width: 500px;
    border-top-left-radius: 8px;
    object-fit: cover;
    @media (max-width: 1400px) {
      height: 420px;
      width: 380px;
    }
  }

  .postInfo {
    background-color: #f9f9f9;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 16px;
    padding-top: 28px;
    padding-bottom: 28px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;

    .closeModal {
      position: absolute;
      display: flex;
      justify-content: center;
      background-color: red;
      font-size: 14px;
      font-weight: 700;
      color: #f9f9f9;
      right: 0;
      left: 0;
      cursor: pointer;

      .fechar {
        display: none;
      }

      &:hover {
        .x {
          display: none;
        }

        .fechar {
          display: block;
          font-size: 16px;
        }
      }
    }

    .post {
      position: absolute;
      display: flex;
      justify-content: center;
      background-color: green;
      font-size: 18px;
      font-weight: 700;
      color: #f9f9f9;
      right: 0;
      left: 0;
      bottom: 0;
      cursor: pointer;
    }
  }

  .nameDescriptionAndCreatedAt {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: flex-start;
    gap: 32px;

    .nameAndCreatedAt {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${({ theme }) => theme.neutral.c6};
        font-weight: 700;
      }

      small {
        font-size: 12px;
        color: ${({ theme }) => theme.neutral.c9};
      }
    }

    .descriptionContainer {
      width: 100%;
      textarea {
        width: 100%;
        height: 200px;
        box-sizing: border-box; /* Inclui padding e border na largura e altura total */
        resize: none; /* Remove a capacidade de redimensionar */
        padding: 10px; /* Adiciona padding para uma melhor experiência de usuário */
        font-family: Arial, sans-serif; /* Defina uma fonte adequada */
        font-size: 16px; /* Tamanho da fonte */
        line-height: 1.5; /* Altura da linha */
      }
    }
  }

  .icons {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    color: #222;
  }

  .commentContainer {
    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
`;
