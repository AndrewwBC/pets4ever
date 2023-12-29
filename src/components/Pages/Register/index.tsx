import { ChangeEvent, useState } from "react";
import FormGroup from "../../FormGroup";
import { Input } from "../../input";
import { Button } from "../../Button";
import { isEmailValid } from "../../../utils/isEmailValid";

export function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    senha: "",
  });

  const [errors, setErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);

  function handleUsername(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    const usernameField = "username";

    if (target.value.length == 0)
      setErrors((prevState) => [
        ...prevState,
        {
          field: usernameField,
          message: "Este campo não pode estar vazio",
        },
      ]);
    else setErrors(errors.filter((erro) => erro.field !== usernameField));
  }

  function handleEmailChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;

    const emailField = "email";

    const errorAlreadyExists = errors.find((erro) => erro.field === emailField);

    if (
      !isEmailValid(target.value) &&
      !errorAlreadyExists &&
      target.value.length > 0
    )
      setErrors((prevState) => [
        ...prevState,
        {
          field: emailField,
          message: "Email inválido!",
        },
      ]);
    if (isEmailValid(target.value))
      setErrors(errors.filter((erro) => erro.field !== emailField));
  }
  console.log(errors);
  function handlePassword(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const passwordField = "password";

    if (target.value.length < 6)
      setErrors((prevState) => [
        ...prevState,
        {
          field: passwordField,
          message: "A senha deve conter seis ou mais caractéres!",
        },
      ]);
    else {
      setErrors(errors.filter((erro) => erro.field !== passwordField));
      setRegisterData((prevState) => ({
        ...prevState,
        senha: target.value,
      }));
    }
  }

  function handleConfirmPassword(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    const fieldConfirmPass = "confirmPass";

    const errorAlreadyExists = errors.find(
      (erro) => erro.field === fieldConfirmPass
    );

    if (
      registerData.senha !== target.value &&
      !errorAlreadyExists &&
      target.value.length >= 6
    )
      setErrors((prevState) => [
        ...prevState,
        {
          field: fieldConfirmPass,
          message: "Senhas diferentes!",
        },
      ]);
    if (registerData.senha === target.value)
      setErrors(errors.filter((erro) => erro.field !== fieldConfirmPass));
    console.log(errors);
  }

  function getErrorMessageByFieldName(fieldName: string) {
    const errorMessage = errors.find(
      (erro) => erro.field === fieldName
    )?.message;

    return errorMessage;
  }

  console.log(getErrorMessageByFieldName("email"));

  return (
    <main>
      <h1>Cadastre-se!</h1>

      <p>
        Apenas quatro informações para iniciar uma <span>conta</span>.
      </p>

      <div>
        <form>
          <FormGroup error={getErrorMessageByFieldName("username")}>
            <Input
              placeholder="Nome de usuário"
              onBlur={handleUsername}
              onChange={({ target }) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  name: target.value,
                }))
              }
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName("email")}>
            <Input placeholder="Email" onChange={handleEmailChange} />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName("password")}>
            <Input
              placeholder="Senha"
              onChange={handlePassword}
              type="password"
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName("confirmPass")}>
            <Input
              placeholder="Confirme sua senha"
              onBlur={handleConfirmPassword}
              type="password"
            />
          </FormGroup>

          <Button type="submit" size="medium" label="Registrar" />
        </form>
      </div>
    </main>
  );
}
