import { ChangeEvent, FormEvent, useState } from "react";
import { Content, Modal } from "../PostOptionsModal/styles";
import { Input } from "../../../../../../components/input";
import { Form, InputContainer } from "./styles";
import { Button } from "../../../../../../components/Button";
import POST_API from "../../../../../../api/post/POST_API";
import { useLocation, useNavigate } from "react-router-dom";

interface EditDescriptionModalProps {
  getPost: () => Promise<any>;
  postId: string;
}

function EditDescriptionModal({ getPost, postId }: EditDescriptionModalProps) {
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      description,
      postId,
    };

    try {
      await POST_API.patchPostDescription(data);
    } catch (err) {
    } finally {
      getPost();
      navigate(pathname.replace("/edit", ""));
    }
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "editDescriptionModal") {
      navigate(pathname.replace("/edit", ""));
    }
  });

  return (
    <Modal id="editDescriptionModal">
      <Content>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              placeholder="digite a nova descrição"
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
            />
          </InputContainer>

          <Button label="Enviar" size="low" />
        </Form>
      </Content>
    </Modal>
  );
}

export default EditDescriptionModal;
