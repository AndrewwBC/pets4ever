import { createPortal } from "react-dom";
import { Container } from "./styles";
import { FormEvent, useState } from "react";
import { uploadFile } from "./api";

const CreatePostModal = () => {
  const [file, setFile] = useState();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    uploadFile(file, "Minha postagem");
  }

  return createPortal(
    <Container>
      <form>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="text" placeholder="Descrição" />

        <button onClick={(e) => handleSubmit(e)}>Enviar</button>
      </form>
    </Container>,
    document.getElementById("createPostModal")!
  );
};

export default CreatePostModal;
