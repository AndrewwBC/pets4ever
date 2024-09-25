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
  const { register, formState, handleSubmit } = form;
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

  async function onSubmit(data: PatchProfileSchema) {
    console.log(data, errors);
    try {
      const response = await userApi.patchProfile(data, user?.userId!);

      if (response) {
        retrieveUser(false);

        setToast({
          message: "Dados atualizados.",
          status: "success",
        });
      }
    } catch (err: any) {
      setPatchResponseError(err.data);
    }
  }

  function getErrorByFieldname(field: string) {
    const error = patchResponseError.find(
      (error) => error.fieldName === field
    )?.message;

    return error;
  }

  return (
    <UpdateSection>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Perfil</SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label="Nome completo"
          error={getErrorByFieldname("fullname")}
        >
          <Input
            type="text"
            placeholder="Novo nome completo"
            {...register("fullname")}
            required
          />
        </FormGroup>

        <FormGroup
          label="Nome de usuário"
          error={getErrorByFieldname("username")}
        >
          <Input
            type="text"
            placeholder="Novo nome de usuário"
            {...register("username")}
            required
          />
        </FormGroup>

        <Button size="low" type="submit" label="Editar Perfil" />
      </form>
    </UpdateSection>
  );
}

export default PatchProfile;
