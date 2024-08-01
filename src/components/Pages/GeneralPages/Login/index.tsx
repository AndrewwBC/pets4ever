import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";

import FormGroup from "../../../FormGroup";
import {
  AuthContainer,
  Container,
  Content,
  Form,
  RegisterContent,
} from "./styles";
import { Input } from "../../../input";
import { Button } from "../../../Button";
import { isEmailValid } from "../../../../utils/isEmailValid";
import axios, { AxiosError } from "axios";

import { Toast } from "../../../Toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GlobalContext } from "../../../../context/GlobalStorage";

export default function Login() {
  const { data, setData } = useContext(GlobalContext);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      loginWithSession();
    }
  }, []);

  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);

  function handleEmailBlur({ target }: ChangeEvent<HTMLInputElement>) {
    const errorAlreadyExist = errors.find((error) => error.field === "Email");

    if (
      !isEmailValid(target.value) &&
      target.value.length > 1 &&
      !errorAlreadyExist
    ) {
      setErrors((prevState) => [
        ...prevState,
        {
          field: "Email",
          message: "Email inválido!",
        },
      ]);
    }
    if (isEmailValid(target.value)) {
      setErrors(errors.filter((error) => error.field !== "Email"));
    }
  }

  function handleEmailChange({ target }: ChangeEvent<HTMLInputElement>) {
    setEmail(target.value);

    const thereIsAnError = errors.find((erro) => erro.field === "Email");
    if (thereIsAnError && isEmailValid(target.value)) {
      setErrors(errors.filter((errors) => errors.field !== "Email"));
    }
  }

  function handlePasswordChange({ target }: ChangeEvent<HTMLInputElement>) {
    setPassword(target.value);

    const valueLength = target.value.length;

    const errorAlreadyExists = errors.find(
      (error) => error.field === "Password"
    );

    if (valueLength > 0 && valueLength < 6 && !errorAlreadyExists) {
      setErrors((prevState) => [
        ...prevState,
        {
          field: "Password",
          message: "Insira ao menos seis caractéres.",
        },
      ]);
    }

    if (valueLength >= 6) {
      setErrors(errors.filter((error) => error.field !== "Password"));
    }
  }

  async function Login(event: FormEvent) {
    event.preventDefault();
    if (!email && !password) {
      alert("Preencha os campos!");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/signin`,
        {
          email: email,
          password: password,
        }
      );

      console.log(response);

      if (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        setData({
          name: response.data.username,
          email: response.data.email,
          userProfileImgUrl: response.data.userProfileImgUrl,
        });

        setToast({
          message: "LOGADO!",
          status: "success",
        });

        nav(`/feed`);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);

        interface ErrorProps {
          fieldName: string;
          message: string;
        }

        const errorData: ErrorProps[] = err.response?.data;

        errorData.map(({ fieldName, message }) => {
          setErrors((prevState) => [
            {
              ...prevState,
              field: fieldName,
              message,
            },
          ]);
        });

        if (err.code === "ERR_NETWORK") {
          setToast({
            message: err.message,
            status: "error",
          });

          return;
        }

        setToast({
          message: err.response?.data.error,
          status: "error",
        });
      }
    }
  }

  async function loginWithSession() {
    try {
      const token = localStorage.getItem("token");

      const response = await axios({
        url: `${import.meta.env.VITE_API}/api/v1/auth/loginwithsession`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      });

      console.log(response);

      if (response) {
        localStorage.setItem("userId", response.data.userId);

        setData({
          name: response.data.username,
          email: response.data.email,
          userProfileImgUrl: response.data.userProfileImgUrl,
        });

        setToast({
          message: "LOGADO!",
          status: "success",
        });

        nav(`/feed`);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data);

        interface ErrorProps {
          fieldName: string;
          message: string;
        }

        const errorData: ErrorProps[] = err.response?.data;

        errorData.map(({ fieldName, message }) => {
          setErrors((prevState) => [
            {
              ...prevState,
              field: fieldName,
              message,
            },
          ]);
        });

        if (err.code === "ERR_NETWORK") {
          setToast({
            message: err.message,
            status: "error",
          });

          return;
        }

        setToast({
          message: err.response?.data.error,
          status: "error",
        });
      }
    }
  }

  function getErrorMessageByFieldName(fieldName: string): string | undefined {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Container>
      <Content>
        <h1>Log in</h1>

        <AuthContainer>
          <div className="loginWithGoogle">
            <FcGoogle size={22} />
            <span>Continue com Google</span>
          </div>
        </AuthContainer>

        <Form onSubmit={Login}>
          <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("Email")}>
            <Input
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="Insira o seu e-mail."
            />
          </FormGroup>
          <FormGroup
            label="SENHA"
            error={getErrorMessageByFieldName("Password")}
          >
            <Input
              value={password}
              type="password"
              onChange={handlePasswordChange}
              placeholder="Insira a sua senha."
            />
          </FormGroup>
          <Link style={{ placeSelf: "flex-end" }} to="/forgotpassword">
            <span className="forgotPassword">Esqueceu a senha?</span>
          </Link>

          <Button
            disabled={Boolean(errors.find((erro) => erro.message))}
            size={"low"}
            label="Entrar"
          />

          <RegisterContent>
            <p>
              Não possui uma conta?
              <Link to="/register">
                <span className="registerLink"> Registre-se</span>
              </Link>
            </p>
          </RegisterContent>
        </Form>
      </Content>

      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </Container>
  );
}
