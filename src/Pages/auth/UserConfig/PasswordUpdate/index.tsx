import { ChangeEvent, FormEvent, useState } from "react";
import FormGroup from "../../../../components/FormGroup";
import { Button } from "../../../../components/Button";

import { SectionTitle } from "../components/sectionTitle";
import { Toast } from "../../../../components/Toast";
import PasswordValidations from "../../../no-auth/Register/components/PasswordValidations";
import InputPassword from "../../../../components/InputPassword";
import USER_API from "../../../../api/user/USER_API";
import { useUser } from "../../../../context/UserProvider";
import MyError from "../../../../api/user/errors/myError";

export default function PasswordUpdate() {
  const { user } = useUser();

  const [data, setData] = useState({
    actualPassword: "",
    newPassword: "",
  });
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [responseErrors, setResponseErrors] = useState([
    { fieldName: "", message: "" },
  ]);

  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: false,
    hasNumber: false,
    hasOneUpper: false,
    hasOneLower: false,
  });

  function handlePassword({ target }: ChangeEvent<HTMLInputElement>) {
    const password = target.value;
    const hasNumber = /\d/.test(password);
    const hasOneLower = /[a-z]/.test(password);
    const hasOneUpper = /[A-Z]/.test(password);

    setPasswordErros({
      numberOfChars: password.length >= 8 ? true : false,
      hasNumber,
      hasOneLower,
      hasOneUpper,
    });

    setData((prevState) => ({
      ...prevState,
      newPassword: password,
    }));
  }

  function handleDisableButton() {
    if (data.newPassword.length < 1) return true;

    const passwordError = findPasswordError("newPassword");

    if (passwordError) return true;
    else return false;
  }

  async function handleSubmit(e: FormEvent) {
    setResponseErrors(responseErrors.filter((error) => error.message !== ""));

    e.preventDefault();
    if (data.actualPassword === data.newPassword) {
      setToast({
        message: "A nova senha não pode ser igual a senha atual.",
        status: "error",
      });
      return;
    }

    try {
      const response = await USER_API.patchPassword(user?.username!, data);

      if (response) {
        setData({
          actualPassword: "",
          newPassword: "",
        });
        setToast({
          message: "Senha atualizada",
          status: "success",
        });
      }
    } catch (err: any) {
      if (err instanceof MyError) {
        if (err.data) {
          setResponseErrors(err.data);
        }
      }
    }
  }

  function findPasswordError(fieldName: string) {
    const responseError = responseErrors.find(
      (error) => error.fieldName === fieldName
    )?.message;
    if (responseError) return responseError;

    const findFalse = Object.values(passwordErrors).find(
      (error) => error === false
    );
    if (fieldName === "newPassword" && data.newPassword.length > 2)
      return findFalse === false ? "Verifique as condições!" : "";
  }

  return (
    <section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Senha</SectionTitle>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormGroup
          label="SENHA ATUAL"
          error={findPasswordError("actualPassword")}
        >
          <InputPassword
            placeholder="Digite a senha atual"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData((prevState) => ({
                ...prevState,
                actualPassword: e.target.value,
              }))
            }
            value={data.actualPassword}
          />
        </FormGroup>

        <FormGroup label="NOVA SENHA" error={findPasswordError("newPassword")}>
          <InputPassword
            placeholder="Digite a sua nova senha"
            onChange={handlePassword}
            onFocus={() => setFocusedPassword(true)}
            value={data.newPassword}
          />
        </FormGroup>
        {focusedPassword && (
          <PasswordValidations passwordErrors={passwordErrors} />
        )}
        <Button
          disabled={handleDisableButton()}
          label="Editar Senha"
          size="low"
        />
      </form>
    </section>
  );
}
