import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalContainer,
  ModalOpacity,
  UpdateProfileImgLoader,
} from "./styles";

interface PostProfilePicture {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const PostProfilePicture = ({ setModal }: PostProfilePicture) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    status: "",
    message: "",
  });

  const formData = new FormData();

  async function PostPicture() {
    const token = localStorage.getItem("token");

    if (file) {
      formData.append("file", file);
    } else return;

    try {
      setIsLoading(true);

      const request = await axios({
        url: `${import.meta.env.VITE_API}/auth/profileimg`,
        data: formData,
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (request.status !== 200) {
        setResponse({
          status: "ERROR",
          message: "Upload não realizado.",
        });
      } else {
        setResponse({
          status: "SUCCESS",
          message: "Upload realizado com sucesso!.",
        });
      }

      console.log(request);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleCloseModal() {
    setModal(false);
  }

  console.log(file);

  return (
    <ModalOpacity>
      <ModalContainer>
        <Modal>
          <input type="file" onChange={(e) => setFile(e.target.files![0])} />

          {!file ? (
            <p>Selecione um arquivo.</p>
          ) : (
            <p>Arquivo selecionado: {file.name}</p>
          )}
        </Modal>
        <div>{isLoading && <UpdateProfileImgLoader />}</div>

        {response && (
          <p
            className="uploadMessage"
            style={{
              color: response.status === "SUCCESS" ? "green" : "red",
            }}
          >
            {response.message}
          </p>
        )}
        <div className="buttonContainer">
          <button disabled={isLoading} onClick={PostPicture}>
            Enviar
          </button>

          <button
            disabled={isLoading}
            className="cancelButton"
            onClick={handleCloseModal}
          >
            Fechar
          </button>
        </div>
      </ModalContainer>
    </ModalOpacity>
  );
};

export default PostProfilePicture;
