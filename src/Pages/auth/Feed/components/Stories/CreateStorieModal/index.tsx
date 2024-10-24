import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useUser } from "../../../../../../context/UserProvider";
import STORIE_API from "../../../../../../api/storie/STORIE_API";
import { Content, PreviewContainer } from "./styles";
import {
  InputFileModal,
  Modal,
} from "../../../../modals/CreatePostModal/styles";
import { createPortal } from "react-dom";

interface CreateStorieModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

function CreateStorieModal({ setModal }: CreateStorieModalProps) {
  const [file, setFile] = useState<File | null | undefined>();

  const [preview, setPreview] = useState({
    file: "",
    type: "",
  });
  const { user } = useUser();

  useEffect(() => {
    if (!file) {
      setPreview({
        file: "",
        type: "",
      });
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview({
      file: objectUrl,
      type: file.type,
    });

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const userId = user?.userId!;

    if (file != undefined) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", "");
      formData.append("userId", userId);

      try {
        const uploadResponse = await STORIE_API.create(formData);
        console.log(uploadResponse);
      } catch (err) {
        console.log(err);
      }
    }
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "createStorieModalContainer") {
      setModal(false);
    }
  });

  return createPortal(
    <Modal id="createStorieModalContainer">
      <Content>
        {!preview.file ? (
          <div className="inputContainer">
            <InputFileModal>
              <div>
                <input
                  type="file"
                  onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                    if (target.files?.length != null) {
                      setFile(target.files[0]);
                    }
                  }}
                />

                {!file ? (
                  <p>Clique aqui para selecionar um arquivo.</p>
                ) : (
                  <p>Arquivo selecionado: {file.name}</p>
                )}
              </div>
            </InputFileModal>
          </div>
        ) : (
          <PreviewContainer>
            {preview.type.includes("mp4") ? (
              <video controls preload="metadata" playsInline>
                <source src={preview.file} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            ) : (
              <img className="feedPhoto" src={preview.file} />
            )}

            <div className="buttons">
              <button
                onClick={() => setFile(null)}
                className="cancelImageButton"
              >
                Selecione outro arquivo
              </button>

              <button
                onClick={(e: FormEvent) => handleSubmit(e)}
                className="postButton"
              >
                Enviar
              </button>
            </div>
          </PreviewContainer>
        )}
      </Content>
    </Modal>,
    document.getElementById("createPostModal")!
  );
}

export default CreateStorieModal;
