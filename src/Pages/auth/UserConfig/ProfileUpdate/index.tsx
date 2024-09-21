import { ChangeEvent, FormEvent, useState } from "react";
import userApi from "../../../../api/user/USER_API";
import { Button } from "../../../../components/Button";
import { UpdateSection } from "./styles";
import { Input } from "../../../../components/input";
import { Toast } from "../../../../components/Toast";
import FormGroup from "../../../../components/FormGroup";

import { SectionTitle } from "../components/sectionTitle";

function Update() {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [userData, setUserData] = useState({
    name: "",
  });
  const [updateResponseError, setUpdateResponseError] = useState([
    {
      fieldName: "",
      message: "",
    },
  ]);

  async function handleUpdateSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await userApi.updateName(userData, "");

      if (response) {
        setToast({
          message: response.message,
          status: "success",
        });
      }
    } catch (err: any) {
      setUpdateResponseError(err.data);
    }
  }

  function getErrorByFieldname(field: string) {
    const error = updateResponseError.find(
      (error) => error.fieldName === field
    )?.message;

    return error;
  }

  return (
    <UpdateSection>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Perfil</SectionTitle>

      <form onSubmit={handleUpdateSubmit}>
        <FormGroup
          label="Nome completo"
          error={getErrorByFieldname("fullname")}
        >
          <Input
            type="text"
            value={userData.name}
            placeholder="Edite o seu nome"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        </FormGroup>

        <FormGroup
          label="Nome de usuário"
          error={getErrorByFieldname("fullname")}
        >
          <Input
            type="text"
            value={userData.name}
            placeholder="Novo nome de usuário"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
        </FormGroup>

        <Button size="low" type="submit" label="Editar Perfil" />
      </form>
    </UpdateSection>
  );
}

export default Update;
