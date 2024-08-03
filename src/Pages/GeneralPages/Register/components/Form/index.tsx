import { Button } from "../../../../../components/Button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input } from "../../../../../components/input";
import axios, { AxiosError } from "axios";

import { isEmailValid } from "../../../../../utils/isEmailValid";
import useToast from "../../../../../components/Toast/useToast";
import FormGroup from "../../../../../components/FormGroup";
import { Toast } from "../../../../../components/Toast";
import PasswordValidations from "../PasswordValidations";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const nav = useNavigate();
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
  const [registerResponseErrors, setRegisterResponseErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);
  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: false,
    hasNotEmailInPassword: false,
    hasNumber: false,
    hasOneUpper: false,
    hasOneLower: false,
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

    setRegisterData((prevState) => ({
      ...prevState,
      email: target.value,
    }));

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
    }
  }

  function getErrorMessageByFieldName(fieldName: string) {
    const errorMessage = errors.find(
      (erro) => erro.field === fieldName
    )?.message;

    const registerError = registerResponseErrors.find(
      (erro) => erro.field === fieldName
    )?.message;

    return errorMessage ? errorMessage : registerError;
  }

  function handlePassword({ target }: ChangeEvent<HTMLInputElement>) {
    const password = target.value;
    const hasNotEmailInPassword = !password.includes(registerData.email);
    const hasNumber = /\d/.test(password);
    const hasOneLower = /[a-z]/.test(password);
    const hasOneUpper = /[A-Z]/.test(password);

    setPasswordErros({
      numberOfChars: password.length >= 8 ? true : false,
      hasNotEmailInPassword,
      hasNumber,
      hasOneLower,
      hasOneUpper,
    });

    setRegisterData((prevState) => ({
      ...prevState,
      senha: password,
    }));
  }

  function findPasswordError() {
    if (registerData.senha.length > 0) {
      const findFalse = Object.values(passwordErrors).find(
        (error) => error === false
      );
      return findFalse === false ? "Verifique as condições!" : "";
    } else return "";
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setRegisterResponseErrors([
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
        `${import.meta.env.VITE_API}/api/v1/auth/signup`,
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.senha,
        }
      );

      const response = request.data;
      console.log(response);
      if (response) {
        setToast({
          message: "Registrado com sucesso!",
          status: "success",
        });

        const changeToastText = setTimeout(() => {
          setToast({
            message: "Direcionando para Login...",
            status: "success",
          });

          clearTimeout(changeToastText);
        }, 1500);

        const changeRoute = setTimeout(() => {
          console.log("Entrou");
          nav("/login");
          clearTimeout(changeRoute);
          console.log("saiu");
        }, 3000);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);

        setToast({
          message: "Verifique os dados!",
          status: "error",
        });

        err.response?.data.map((erro: { fieldName: string; message: string }) =>
          setRegisterResponseErrors((prevState) => [
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

  function handleDisableButton() {
    const oneFieldEmpty = Object.values(registerData).some(
      (data) => data.length === 0
    );
    const passwordError = findPasswordError();
    const emailOrUsernameErrors = errors.find((error) => error.field != "");

    if (oneFieldEmpty || passwordError || emailOrUsernameErrors) return true;
    else return false;
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("Email")}>
          <Input
            placeholder="Insira o seu endereço de e-mail"
            onChange={handleEmailChange}
            value={registerData.email}
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

        <FormGroup label="SENHA" error={findPasswordError()}>
          <Input
            placeholder="Digite a sua senha"
            onChange={handlePassword}
            type="password"
            onFocus={() => setFocusedPassword(true)}
            value={registerData.senha}
          />
        </FormGroup>
        {focusedPassword && (
          <PasswordValidations passwordErrors={passwordErrors} />
        )}

        <Button
          type="submit"
          disabled={handleDisableButton()}
          size="medium"
          label="Registrar"
        />
      </form>
      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </div>
  );
}
