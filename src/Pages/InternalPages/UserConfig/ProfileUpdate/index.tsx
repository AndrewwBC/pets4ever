import { ChangeEvent, FormEvent, useContext, useState } from "react";
import userApi from "../../../../api/user/USER_API";
import { GlobalContext } from "../../../../context/GlobalStorage";
import { Button } from "../../../../components/Button";
import { UpdateSection } from "./styles";
import { Input } from "../../../../components/input";
import { Toast } from "../../../../components/Toast";
import FormGroup from "../../../../components/FormGroup";

import { SectionTitle } from "../components/sectionTitle";

function Update() {
  const { data, setData } = useContext(GlobalContext);
  const [userData, setUserData] = useState({
    name: "",
  });
  const [toast, setToast] = useState({
    message: "",
    status: "",
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
      const response = await userApi.update(userData, data.userId);
      console.log(response);
      if (response) {
        setToast({
          message: response.data,
          status: "success",
        });

        setData((previewData) => ({
          ...previewData,
        }));
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
  console.log(updateResponseError);
  return (
    <UpdateSection>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Perfil</SectionTitle>

      <form onSubmit={handleUpdateSubmit}>
        <FormGroup error={getErrorByFieldname("name")}>
          <label>
            <p>Nome</p>
            <Input
              type="text"
              placeholder={`Nome atual: ${data.name}`}
              value={userData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </label>
        </FormGroup>

        <label>
          <p>Senha</p>
          <Input
            type="password"
            placeholder="Digite uma nova senha."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </label>
        <Button size="low" type="submit" label="Editar Perfil" />
      </form>
    </UpdateSection>
  );
}

export default Update;
