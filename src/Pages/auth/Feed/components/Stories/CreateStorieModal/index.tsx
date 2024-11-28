import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useUser } from "../../../../../../context/UserProvider";
import STORIE_API from "../../../../../../api/storie/STORIE_API";
import { Content, PreviewContainer, InputFileModalStorie } from "./styles";
import { Modal } from "../../../../modals/CreatePostModal/styles";
import { createPortal } from "react-dom";
import { CreateStorieModalProps } from "./types";
import axios from "axios";

function CreateStorieModal({
  setModal,
  setCreateStatus,
}: CreateStorieModalProps) {
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

  async function iaPreview(e: FormEvent) {
    try {
      setModal(false);
      setCreateStatus({
        isLoading: true,
        success: false,
        iaError: false,
      });
      const formData = new FormData();
      formData.append("file", file!);
      const requestPy = await axios({
        url: "https://iapython-dccdb8299722.herokuapp.com/validate",
        method: "POST",
        data: formData,
      });

      const previsao = await requestPy.data.previsao;
      console.log(previsao, requestPy);
      if (previsao === "Animal") {
        await handleSubmit(e);
      }

      if (previsao === "Não é Animal") {
        setCreateStatus({
          isLoading: false,
          success: false,
          iaError: true,
        });
      }

      return previsao;
    } catch (err) {}
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const userId = user?.userId!;

    if (file != undefined) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", "");
      formData.append("userId", userId);

      try {
        setModal(false);
        setCreateStatus({
          isLoading: true,
          success: undefined,
          iaError: false,
        });
        const uploadResponse = await STORIE_API.create(formData);

        if (uploadResponse) {
          setCreateStatus({
            isLoading: true,
            success: true,
            iaError: false,
          });
        }
        console.log(uploadResponse);
      } catch (err) {
        setCreateStatus({
          isLoading: true,
          success: false,
          iaError: false,
        });
        console.log(err);
      } finally {
        setCreateStatus((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
        const timer = setTimeout(() => {
          setCreateStatus({
            isLoading: false,
            success: undefined,
            iaError: false,
          });
          clearTimeout(timer);
        }, 3000);
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
            <InputFileModalStorie>
              <div className="selectFile">
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
            </InputFileModalStorie>
          </div>
        ) : (
          <PreviewContainer>
            <img className="feedPhoto" src={preview.file} />

            <div className="buttons">
              <button
                onClick={() => setFile(null)}
                className="cancelImageButton"
              >
                Selecione outro arquivo
              </button>

              <button
                onClick={(e: FormEvent) => iaPreview(e)}
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
