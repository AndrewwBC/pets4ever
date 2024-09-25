import { useState } from "react";
import userApi from "../../../../api/user/USER_API";
import { Button } from "../../../../components/Button";
import { UpdateSection } from "./styles";
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

  async function patch(data: PatchProfileSchema) {
    setPatchResponseError(
      patchResponseError.filter((error) => !error.fieldName)
    );

    console.log(errors);
    try {
      const response = await userApi.patchProfile(data, user?.userId!);

      if (response) {
        retrieveUser(false);
        reset();
        setToast({
          message: "Dados atualizados.",
          status: "success",
        });
      }
    } catch (err: any) {
      setPatchResponseError(err.data);
    }
  }

  function getErrorByFieldname(field: keyof PatchProfileSchema) {
    const apiError = patchResponseError.find(
      (error) => error.fieldName === field
    )?.message;

    const zodError = errors[field]?.message; // Captura os erros de Zod
    console.log(zodError);
    // Prioriza os erros do Zod, mas se não houver, exibe o erro da API
    return zodError || apiError;
  }

  return (
    <UpdateSection>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Perfil</SectionTitle>

      <form onSubmit={handleSubmit(patch)}>
        <FormGroup
          label="Nome completo"
          error={getErrorByFieldname("fullname")}
        >
          <Input
            id="fullname"
            type="text"
            placeholder="Novo nome completo"
            {...register("fullname")}
          />
        </FormGroup>

        <FormGroup
          label="Nome de usuário"
          error={getErrorByFieldname("username")}
        >
          <Input
            id="username"
            type="text"
            placeholder="Novo nome de usuário"
            {...register("username")}
          />
        </FormGroup>

        <Button size="low" type="submit" label="Editar Perfil" />
      </form>
    </UpdateSection>
  );
}

export default PatchProfile;
