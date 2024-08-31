import { FormEvent, useContext, useState } from "react";
import { DeleteSection } from "./styles";
import userApi from "../../../../api/user/USER_API";
import { GlobalContext } from "../../../../context/GlobalStorage";
import { Button } from "../../../../components/Button";

function Delete() {
  const { data } = useContext(GlobalContext);
  const [isDeleteButtonDisable, setIsDeleteButtonDisable] = useState(true);

  function handleDeleteInput(inputText: string) {
    if (inputText === "deletar minha conta") {
      setIsDeleteButtonDisable(false);
    } else {
      setIsDeleteButtonDisable(true);
    }
  }

  async function handleDeleteSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await userApi.delete(data.userId);
    console.log(response);
  }

  return (
    <DeleteSection onSubmit={handleDeleteSubmit}>
      <p>Deletar perfil</p>
      <label>
        Digite "deletar minha conta" para liberar a ação.
        <input
          placeholder="deletar minha conta"
          type="text"
          onChange={(e) => handleDeleteInput(e.target.value)}
        />
      </label>
      <p>Ao clicar no botão, sua conta será deletada imediatamente.</p>
      <Button
        size="medium"
        label="Deletar"
        disabled={isDeleteButtonDisable}
        type="submit"
      />
    </DeleteSection>
  );
}

export default Delete;
