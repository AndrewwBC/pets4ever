import { Button } from "../../../../../Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../../../../input";
import axios, { AxiosError } from "axios";

import { isEmailValid } from "../../../../../../utils/isEmailValid";
import useToast from "../../../../../Toast/useToast";
import FormGroup from "../../../../../FormGroup";
import { Toast } from "../../../../../Toast";
import PasswordValidations from "../PasswordValidations";

export default function Form() {
  const { toast, setToast } = useToast();
  const [focusedPassword, setFocusedPassword] = useState(false);
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
  const [registerErrors, setRegisterErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);
  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: true,
    hasNotEmailInPassword: false,
    hasNumber: true,
    hasOneUpper: true,
    hasOneLower: true,
  });

  function handleUsername({ target }: ChangeEvent<HTMLInputElement>) {
    const usernameField = "Username";

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

  function handleEmailChange({ target }: ChangeEvent<HTMLInputElement>) {
    const emailField = "Email";

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
    if (isEmailValid(target.value)) {
      setErrors(errors.filter((erro) => erro.field !== emailField));
      registerData.email = target.value;
    }
  }

  function getErrorMessageByFieldName(fieldName: string) {
    const errorMessage = errors.find(
      (erro) => erro.field === fieldName
    )?.message;

    const registerErrorMessage = registerErrors.find(
      (erro) => erro.field === fieldName
    )?.message;

    return errorMessage ? errorMessage : registerErrorMessage;
  }

  function handlePassword({ target }: ChangeEvent<HTMLInputElement>) {
    const password = target.value;
    const hasNumberAndUppercaseRegex = /^(?=.*\d)(?=.*[A-Z]).+$/;

    if (password.length >= 8)
      setPasswordErros((prevState) => ({
        ...prevState,
        numberOfChars: false,
      }));

    if (password.includes(registerData.email))
      setPasswordErros((prevState) => ({
        ...prevState,
        hasNotEmailInPassword: false,
      }));

    if (hasNumberAndUppercaseRegex.test(password)) {
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setRegisterErrors([
      {
        field: "",
        message: "",
      },
    ]);

    if (errors.find((erro) => erro.message)) return;

    const userFormData = Object.values(registerData);
    console.log(
      registerData,
      userFormData,
      userFormData.some((data) => data.length === 0)
    );
    if (userFormData.some((data) => data.length === 0)) {
      setToast({
        message: "Preencha todos os campos!",
        status: "error",
      });
      return;
    }

    try {
      const request = await axios.post(
        "import.meta.env.import.meta.env.VITE_API/api/v1/auth/signup",
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.senha,
        }
      );

      const response = request.data;
      console.log(response);
      if (response)
        setToast({
          message: "Registrado com sucesso!",
          status: "success",
        });
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);

        setToast({
          message: "Verifique os dados!",
          status: "error",
        });

        err.response?.data.map((erro: { fieldName: string; message: string }) =>
          setRegisterErrors((prevState) => [
            ...prevState,
            {
              field: erro.fieldName,
              message: erro.message,
            },
          ])
        );
      }
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("Email")}>
          <Input
            placeholder="Insira o seu endereço de e-mail"
            onChange={handleEmailChange}
          />
        </FormGroup>

        <FormGroup
          label="NOME DE USUÁRIO"
          error={getErrorMessageByFieldName("Username")}
        >
          <Input
            placeholder="Insira o nome de usuário"
            onBlur={handleUsername}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setRegisterData((prevState) => ({
                ...prevState,
                name: target.value,
              }))
            }
          />
        </FormGroup>

        <FormGroup label="SENHA" error={getErrorMessageByFieldName("Password")}>
          <Input
            placeholder="Digite a sua senha"
            onChange={handlePassword}
            type="password"
            onFocus={() => setFocusedPassword(true)}
          />
        </FormGroup>
        {focusedPassword && (
          <PasswordValidations passwordErrors={passwordErrors} />
        )}

        <Button type="submit" size="medium" label="Registrar" />
      </form>
      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </div>
  );
}
