import { ChangeEvent, FormEvent, useState } from "react";
import { DeleteSection } from "./styles";

import { Button } from "../../../../components/Button";
import { useUser } from "../../../../context/UserProvider";
import USER_API from "../../../../api/user/USER_API";
import { SectionTitle } from "../components/sectionTitle";
import { Input } from "../../../../components/input";
import FormGroup from "../../../../components/FormGroup";
import { useNavigate } from "react-router-dom";
import { FullDogLoader } from "../../../../components/FullDogLoader";

function Delete() {
  const [isLoading, setIsLoading] = useState({
    state: false,
    text: "",
  });

  const nav = useNavigate();
  const { user, setUser } = useUser();
  const [isDeleteButtonDisable, setIsDeleteButtonDisable] = useState(true);

  function handleDeleteInput(inputText: string) {
    if (inputText === "Deletar minha conta") {
      setIsDeleteButtonDisable(false);
    } else {
      setIsDeleteButtonDisable(true);
    }
  }

  async function handleDeleteSubmit(e: FormEvent) {
    e.preventDefault();
    const userId = user?.userId;
    try {
      setIsLoading({
        state: true,
        text: "Excluindo sua conta...",
      });
      const response = await USER_API.delete(userId!);

      if (response) {
        setIsLoading({
          state: true,
          text: "Sucesso. Direcionando para Login...",
        });

        const navTimer = setTimeout(() => {
          setUser(null);
          nav("/");
          setIsLoading({
            state: false,
            text: "",
          });
          clearTimeout(navTimer);
        }, 2000);
      }
    } catch (err) {
      setIsLoading({
        state: false,
        text: "",
      });
    }
  }

  return (
    <DeleteSection onSubmit={handleDeleteSubmit}>
      {isLoading.state && (
        <FullDogLoader text={isLoading.text} transparent={true} />
      )}
      <SectionTitle>Excluir Conta</SectionTitle>
      <form action="">
        <FormGroup label="Confirme a exclusão">
          <Input
            placeholder="Digite: Deletar minha conta"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDeleteInput(e.target.value)
            }
          />
        </FormGroup>

        <Button
          size="low"
          label="Excluir Perfil"
          disabled={isDeleteButtonDisable}
          type="submit"
        />
      </form>
    </DeleteSection>
  );
}

export default Delete;
