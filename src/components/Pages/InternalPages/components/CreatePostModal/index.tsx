import { createPortal } from "react-dom";

import { FormEvent, useContext, useEffect, useState } from "react";
import { uploadFile } from "./api";
import { VscComment, VscHeart, VscSend } from "react-icons/vsc";
import { Content, InputFileModal, Modal } from "./styles";
import { Input } from "../../../../input";
import { GlobalContext } from "../../../../../context/GlobalStorage";
import ValidatingImageModal from "./ValidatingImageModal";

const CreatePostModal = ({ setCreatePostModal }) => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [response, setUploadResponse] = useState("");
  const [isLoading, setIsLoading] = useState({
    step: "",
    isLoading: false,
  });
  const [preview, setPreview] = useState("");

  const { data } = useContext(GlobalContext);
  const now = new Date();
  const createdAt = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const uploadResponse = await uploadFile(file, description, setIsLoading);
    setUploadResponse(uploadResponse);
    console.log(uploadResponse);
  }

  return createPortal(
    <Modal>
      <Content>
        <div>
          {isLoading.isLoading && (
            <ValidatingImageModal
              setModal={setIsLoading}
              isLoadingData={isLoading}
            />
          )}

          {!preview ? (
            <InputFileModal>
              <div>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />

                {!file ? (
                  <p>Clique aqui para selecionar uma imagem.</p>
                ) : (
                  <p>Arquivo selecionado: {file.name}</p>
                )}
              </div>
            </InputFileModal>
          ) : (
            <div>
              <img className="feedPhoto" src={preview} />
              <button onClick={() => setFile("")} className="cancelImageButton">
                Selecionar outra imagem?
              </button>
            </div>
          )}
        </div>

        <div className="postInfo">
          <div onClick={() => setCreatePostModal(false)} className="closeModal">
            <p className="x">x</p>
            <p className="fechar">cancelar</p>
          </div>

          <div onClick={handleSubmit} className="post">
            <p>Postar</p>
          </div>

          <div className="nameDescriptionAndCreatedAt">
            <div className="nameAndCreatedAt">
              <p>@{data.name}</p>
              <small>{createdAt}</small>
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
