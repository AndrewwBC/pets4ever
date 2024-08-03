import { FormEvent, useContext, useEffect, useState } from "react";
import { Content, DeleteSection } from "./styles";
import { GlobalContext } from "../../../context/GlobalStorage";
import { Button } from "../../../components/Button";
import { UpdateAPI } from "./updateAPI";
import { DeleteAPI } from "./deleteAPI";

const Config = () => {
  const [option, setOption] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isDeleteButtonDisable, setIsDeleteButtonDisable] = useState(true);
  const [setIsLoading] = useState(false);

  const { data } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      setUserData((prevState) => ({
        ...prevState,
        name: data.name,
        email: data.email,
      }));
    }
  }, []);

  function handleOption(option: string) {
    if (option === "edit") {
      setOption(true);
    } else {
      setOption(false);
    }
  }

  function handleDeleteInput(inputText: string) {
    if (inputText === "deletar minha conta") {
      setIsDeleteButtonDisable(false);
    } else {
      setIsDeleteButtonDisable(true);
    }
  }

  function handleUpdateSubmit(e: FormEvent) {
    e.preventDefault();
    UpdateAPI(userData, setIsLoading);
  }

  function handleDeleteSubmit(e: FormEvent) {
    e.preventDefault();
    DeleteAPI(setIsLoading);
  }

  return (
    <Content>
      <header>
        <nav>
          <ul>
            <li onClick={() => handleOption("edit")}>Editar dados</li>
            <li onClick={() => handleOption("delete")}>Deletar Conta</li>
          </ul>
        </nav>
      </header>

      {option ? (
        <section>
          <form onSubmit={handleUpdateSubmit}>
            <p>
              Os campos possuem os valores atuais da sua conta. Edite os campos
              que deseja atualizar.
            </p>
            <label>
              Nome
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                placeholder="Digite uma nova senha."
                value={userData.password}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </label>
            <Button size="medium" type="submit" label="Editar" />
          </form>
        </section>
      ) : (
        <DeleteSection onSubmit={handleDeleteSubmit}>
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
      )}
    </Content>
  );
};

export default Config;
