import { useEffect, useState } from "react";
import userApi from "../../../../api/user/USER_API";
import { Button } from "../../../../components/Button";
import { UpdateSection, Options } from "./styles";
import { Input } from "../../../../components/input";
import { Toast } from "../../../../components/Toast";
import FormGroup from "../../../../components/FormGroup";

import { SectionTitle } from "../components/sectionTitle";
import { useUser } from "../../../../context/UserProvider";
import { useForm } from "react-hook-form";
import { patchProfileSchema, PatchProfileSchema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function PatchProfile() {
  const { user, retrieveUser } = useUser();
  const form = useForm<PatchProfileSchema>({
    mode: "onSubmit",
    resolver: zodResolver(patchProfileSchema),
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors } = formState;
  const [options, setOptions] = useState({
    fullname: true,
    username: false,
    bio: false,
  });

  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

  const [patchResponseError, setPatchResponseError] = useState([
    {
      fieldName: "",
      message: "",
    },
  ]);

  useEffect(() => {}, [user]);

  async function patch(data: PatchProfileSchema) {
    setPatchResponseError(
      patchResponseError.filter((error) => !error.fieldName)
    );

    if (
      data.bio === user?.bio &&
      data.fullname === user.fullname &&
      data.username === user.username
    ) {
      setToast({
        message: "Edite ao menos um campo",
        status: "error",
      });
      return;
    }

    try {
      const response = await userApi.patchProfile(data, user?.userId!);

      if (response) {
        await retrieveUser(false);
        setToast({
          message: "Dados atualizados.",
          status: "success",
        });
        reset();
      }
    } catch (err: any) {
      setPatchResponseError(err.data);
    } finally {
    }
  }

  function getErrorByFieldname(field: keyof PatchProfileSchema) {
    const apiError = patchResponseError.find(
      (error) => error.fieldName === field
    )?.message;

    const zodError = errors[field]?.message;
    return zodError || apiError;
  }

  interface radioOptions {
    option: string;
    value: "fullname" | "username" | "bio";
  }

  const radioOptions: radioOptions[] = [
    {
      option: "Nome Completo",
      value: "fullname",
    },
    {
      option: "Nome de Usuário",
      value: "username",
    },
    {
      option: "Bio",
      value: "bio",
    },
  ];

  function handleOptionChange(value: "fullname" | "username" | "bio") {
    setOptions(
      (prevState: { fullname: boolean; username: boolean; bio: boolean }) => ({
        ...prevState,
        [value]: prevState[value] ? false : true,
      })
    );
  }
  return (
    <UpdateSection>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Perfil</SectionTitle>

      <span className="editAdvice">* Selecione os dados que deseja editar</span>

      <Options>
        {radioOptions.map(({ option, value }) => (
          <div className="option" key={Math.random()}>
            <label onClick={() => handleOptionChange(value)}>
              <input
                type="radio"
                name={option}
                value={value}
                checked={options[value]}
                readOnly
              />
              {option}
            </label>
          </div>
        ))}
      </Options>

      <form noValidate onSubmit={handleSubmit(patch)}>
        <FormGroup
          label="Nome completo"
          error={getErrorByFieldname("fullname")}
          visible={options.fullname}
        >
          <Input
            id="fullname"
            type="text"
            defaultValue={user?.fullname}
            placeholder="Novo nome completo"
            {...register("fullname")}
          />
        </FormGroup>

        <FormGroup
          label="Nome de usuário"
          error={getErrorByFieldname("username")}
          visible={options.username}
        >
          <Input
            id="username"
            type="text"
            defaultValue={user?.username}
            placeholder="Novo nome de usuário"
            {...register("username")}
          />
        </FormGroup>

        <FormGroup
          label="Bio"
          error={getErrorByFieldname("bio")}
          visible={options.bio}
        >
          <Input
            id="bio"
            type="text"
            defaultValue={user?.bio}
            placeholder="Bio"
            {...register("bio")}
          />
        </FormGroup>

        <Button size="low" type="submit" label="Editar Perfil" />
      </form>
    </UpdateSection>
  );
}

export default PatchProfile;
