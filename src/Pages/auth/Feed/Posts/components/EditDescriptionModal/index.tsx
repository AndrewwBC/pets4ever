import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Content, Modal } from "../PostOptionsModal/styles";
import { Input } from "../../../../../../components/input";
import { Form, InputContainer } from "./styles";
import { Button } from "../../../../../../components/Button";
import POST_API from "../../../../../../api/post/POST_API";

interface EditDescriptionModalProps {
  getPost: () => Promise<any>;
  setModal: Dispatch<SetStateAction<boolean>>;
  postId: string;
}

function EditDescriptionModal({
  getPost,
  setModal,
  postId,
}: EditDescriptionModalProps) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
      setModal(false);
      getPost();
    }
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "editDescriptionModal") {
      setModal(false);
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
