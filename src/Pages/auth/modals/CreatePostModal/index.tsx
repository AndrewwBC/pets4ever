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
import { GiCancel, GiConfirmed } from "react-icons/gi";
import { IoMdPhotos } from "react-icons/io";
import { Toast } from "../../../../components/Toast";

interface CreatePostModalProps {
  setCreatePostModal: Dispatch<SetStateAction<boolean>>;
}

const CreatePostModal = ({ setCreatePostModal }: CreatePostModalProps) => {
  const [file, setFile] = useState<File | null | undefined>();
  const [description, setDescription] = useState("");
  const [setUploadResponse] = useState<any>(null);
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
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

  if (isLoading.step === "successClose") {
    const timer = setTimeout(() => {
      setCreatePostModal(false);
      clearTimeout(timer);
    }, 500);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userId = user?.userId!;

    if (!file)
      setToast({
        message: "Insira uma imagem",
        status: "error",
      });

    if (file != undefined) {
      const uploadResponse = await uploadFile(
        userId,
        file,
        description,
        isLoading,
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
    <Modal
      style={
        isLoading.step === "successClose"
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "rgba(0,0,0,.5)" }
      }
      id="createPostModalContainer"
    >
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <Content className={isLoading.step === "successClose" ? "animate" : ""}>
        <div className="absoluteButtons parent">
          <div onClick={() => setFile(null)}>
            <IoMdPhotos size={28} color="grey" />
            <p>Trocar imagem</p>
          </div>
          <div className="cancel" onClick={() => setCreatePostModal(false)}>
            <GiCancel size={28} color="red" />
            <p>Cancelar</p>
          </div>
          <div onClick={handleSubmit}>
            <GiConfirmed onClick={handleSubmit} size={28} color="green" />
            <p>Postar</p>
          </div>
        </div>

        <div>
          {isLoading.isLoading && (
            <ValidatingImageModal
              setModal={setIsLoading}
              isLoadingData={isLoading}
            />
          )}

          {!preview.file ? (
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
          ) : (
            <div className="previewContainer">
              <img className="feedPhoto" src={preview.file} />
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
        </div>
      </Content>
    </Modal>,
    document.getElementById("createPostModal")!
  );
};

export default CreatePostModal;
