import { ChangeEvent, FormEvent, useState } from "react";
import FormGroup from "../../../FormGroup";
import { Input } from "../../../input";
import { Button } from "../../../Button";
import { isEmailValid } from "../../../../utils/isEmailValid";
import { Container, Content } from "./styles";
import axios, { AxiosError } from "axios";
import { Toast } from "../../../Toast";
import useToast from "../../../Toast/useToast";

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
  const [registerErrors, setRegisterErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);

  const { toast, setToast } = useToast();

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
  function handlePassword({ target }: ChangeEvent<HTMLInputElement>) {
    const passwordField = "Password";

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

  function handleConfirmPassword({ target }: ChangeEvent<HTMLInputElement>) {
    const fieldConfirmPass = "ConfirmPass";

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

    const registerErrorMessage = registerErrors.find(
      (erro) => erro.field === fieldName
    )?.message;

    return errorMessage ? errorMessage : registerErrorMessage;
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
      const request = await axios.post("http://localhost:8080/auth/register", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.senha,
      });

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
    <Container>
      <Content>
        <div className="text">
          <h1>Cadastre-se!</h1>

          <p>
            Apenas quatro informações para iniciar uma <span>conta</span>.
          </p>
        </div>

        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName("Username")}>
              <Input
                placeholder="Nome de usuário"
                onBlur={handleUsername}
                onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    name: target.value,
                  }))
                }
              />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName("Email")}>
              <Input placeholder="Email" onChange={handleEmailChange} />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName("Password")}>
              <Input
                placeholder="Senha"
                onChange={handlePassword}
                type="password"
              />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName("ConfirmPass")}>
              <Input
                placeholder="Confirme sua senha"
                onChange={handleConfirmPassword}
                type="password"
              />
            </FormGroup>

            <Button type="submit" size="medium" label="Registrar" />
          </form>
        </div>
        {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
      </Content>
    </Container>
  );
}
