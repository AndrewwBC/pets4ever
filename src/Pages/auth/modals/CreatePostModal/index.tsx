import { createPortal } from "react-dom";

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { uploadFile } from "./api";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, InputFileModal, Modal } from "./styles";
import { Input } from "../../../../components/input";
import ValidatingImageModal from "./ValidatingImageModal";
import { useUser } from "../../../../context/UserProvider";

interface CreatePostModalProps {
  setCreatePostModal: Dispatch<SetStateAction<boolean>>;
}

const CreatePostModal = ({ setCreatePostModal }: CreatePostModalProps) => {
  const [file, setFile] = useState<File | null | undefined>();
  const [description, setDescription] = useState("");
  const [setUploadResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<{
    step: string;
    isLoading: boolean;
  }>({
    step: "",
    isLoading: false,
  });
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
      const uploadResponse = await uploadFile(
        userId,
        file,
        description,
        setIsLoading
      );
      setUploadResponse(uploadResponse);
    }
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "createPostModalContainer") {
      setCreatePostModal(false);
    }
  });
  console.log(preview);
  return createPortal(
    <Modal id="createPostModalContainer">
      <Content>
        <div>
          {isLoading.isLoading && (
            <ValidatingImageModal
              setModal={setIsLoading}
              isLoadingData={isLoading}
            />
          )}

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
                    <p>Clique aqui para selecionar uma imagem.</p>
                  ) : (
                    <p>Arquivo selecionado: {file.name}</p>
                  )}
                </div>
              </InputFileModal>
            </div>
          ) : (
            <div className="previewContainer">
              {preview.type.includes("mp4") ? (
                <video controls preload="metadata" playsInline>
                  <source src={preview.file} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              ) : (
                <img className="feedPhoto" src={preview.file} />
              )}

              <button
                onClick={() => setFile(null)}
                className="cancelImageButton"
              >
                Selecionar outra imagem?
              </button>
            </div>
          )}
        </div>

        <div className="postInfo">
          <div className="nameDescriptionAndCreatedAt">
            <div className="nameAndCreatedAt">
              <p>@{user?.username}</p>
            </div>

            <div className="descriptionContainer">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite aqui a descrição da postagem."
              />
            </div>
          </div>

          <div className="icons">
            <VscHeart style={{ cursor: "pointer" }} size={26} />
            <VscComment style={{ cursor: "pointer" }} size={26} />
            <VscSend style={{ cursor: "pointer" }} size={26} />
          </div>

          <div className="commentContainer">
            <Input disabled={true} placeholder="Insira um comentário..." />
            <VscSend style={{ cursor: "pointer" }} size={26} />
          </div>

          <div onClick={handleSubmit} className="post">
            <p>Postar</p>
          </div>
        </div>
      </Content>
    </Modal>,
    document.getElementById("createPostModal")!
  );
};

export default CreatePostModal;
