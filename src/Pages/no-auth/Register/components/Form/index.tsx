import { Button } from "../../../../../components/Button";
import { ChangeEvent, useState } from "react";
import { Input } from "../../../../../components/input";

import useToast from "../../../../../components/Toast/useToast";
import FormGroup from "../../../../../components/FormGroup";
import { Toast } from "../../../../../components/Toast";
import PasswordValidations from "../PasswordValidations";
import { useNavigate } from "react-router-dom";

import { registerFormSchema, RegisterFormSchema } from "./zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import USER_API from "../../../../../api/user/USER_API";
import MyError from "../../../../../api/user/errors/myError";
import { RegisterForm } from "./styles";
import { Link } from "react-router-dom";

export default function Form() {
  const nav = useNavigate();
  const { toast, setToast } = useToast();
  const [focusedPassword, setFocusedPassword] = useState(false);

  const form = useForm<RegisterFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(registerFormSchema),
  });
  const { register, formState, handleSubmit, watch, reset } = form;
  const { errors } = formState;

  const [registerResponseErrors, setRegisterResponseErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);
  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: false,
    hasNumber: false,
    hasOneUpper: false,
    hasOneLower: false,
  });

  function getErrorMessageByFieldName(fieldName: keyof RegisterFormSchema) {
    const errorsFromAPI = registerResponseErrors.find(
      (err) => err.field === fieldName
    )?.message;

    const zodError = errors[fieldName]?.message;

    return errorsFromAPI || zodError;
  }

  function handlePassword(password: string) {
    const hasNumber = /\d/.test(password);
    const hasOneLower = /[a-z]/.test(password);
    const hasOneUpper = /[A-Z]/.test(password);

    setPasswordErros({
      numberOfChars: password.length >= 8 ? true : false,
      hasNumber,
      hasOneLower,
      hasOneUpper,
    });
  }

  function findPasswordError() {
    const watchedPass = watch("password");
    if (watchedPass?.length > 0) {
      const findFalse = Object.values(passwordErrors).find(
        (error) => error === false
      );
      return findFalse === false ? "Verifique as condições!" : "";
    } else return "";
  }

  async function onSubmit(data: RegisterFormSchema) {
    console.log(errors);
    setRegisterResponseErrors(
      registerResponseErrors.filter((err) => !err.field)
    );

    try {
      const signUpResponse = await USER_API.signup(data);
      if (signUpResponse) {
        reset();
        setToast({
          message: signUpResponse,
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
          nav("/");
          clearTimeout(changeRoute);
        }, 3000);
      }
    } catch (err) {
      if (err instanceof MyError) {
        setToast({
          message: "Verifique os dados!",
          status: "error",
        });

        err.data.map((erro: { fieldName: string; message: string }) =>
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

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label="NOME COMPLETO"
          error={getErrorMessageByFieldName("fullname")}
        >
          <Input
            id="fullname"
            placeholder="Insira o nome"
            required
            {...register("fullname")}
          />
        </FormGroup>

        <FormGroup
          label="NOME DE USUÁRIO"
          error={getErrorMessageByFieldName("username")}
        >
          <Input
            id="username"
            placeholder="Insira o nome de usuário"
            required
            {...register("username")}
          />
        </FormGroup>

        <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("email")}>
          <Input
            id="email"
            placeholder="Insira o seu endereço de e-mail"
            required
            type="email"
            {...register("email")}
          />
        </FormGroup>

        <FormGroup label="SENHA" error={findPasswordError()}>
          <Input
            placeholder="Digite a sua senha"
            type="password"
            onFocus={() => setFocusedPassword(true)}
            required
            {...register("password", {
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                handlePassword(e.target.value),
            })}
          />
        </FormGroup>
        {focusedPassword && (
          <PasswordValidations passwordErrors={passwordErrors} />
        )}

        <Button type="submit" size="low" label="Registrar" />

        <div className="doLogin">
          <span>Já possui uma conta?</span>
          <Link to={"/"}>
            <p>Fazer login</p>
          </Link>
        </div>
      </RegisterForm>
      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </>
  );
}
