import { ChangeEvent, useState } from "react";
import FormGroup from "../../../../components/FormGroup";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/Button";

import { SectionTitle } from "../components/sectionTitle";
import { Toast } from "../../../../components/Toast";
import PasswordValidations from "../../../no-auth/Register/components/PasswordValidations";

export default function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [focusedPassword, setFocusedPassword] = useState(false);

  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: false,
    hasNumber: false,
    hasOneUpper: false,
    hasOneLower: false,
  });

  function findPasswordError() {
    if (password.length > 0) {
      const findFalse = Object.values(passwordErrors).find(
        (error) => error === false
      );
      return findFalse === false ? "Verifique as condições!" : "";
    } else return "";
  }

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

    setPassword(password);
  }

  function handleDisableButton() {
    if (password.length < 1) return true;

    const passwordError = findPasswordError();

    if (passwordError) return true;
    else return false;
  }

  return (
    <section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Senha</SectionTitle>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <FormGroup label="SENHA" error={findPasswordError()}>
          <Input
            placeholder="Digite a sua nova senha"
            onChange={handlePassword}
            type="password"
            onFocus={() => setFocusedPassword(true)}
            value={password}
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
