import { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalContainer,
  ModalOpacity,
  UpdateProfileImgLoader,
} from "./styles";
import API from "../../../../api/axiosInstance";
import { useUser } from "../../../../context/UserProvider";

interface PostProfilePictureProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const PostProfilePicture = ({ setModal }: PostProfilePictureProps) => {
  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formData = new FormData();

  async function PostPicture() {
    const userId = user.userId;
    if (file) {
      formData.append("file", file);
    } else return;

    try {
      setIsLoading(true);

      const request = await API.patch(`/user/${userId}/profile-img`, formData);

      if (request) {
        setModal(false);
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
