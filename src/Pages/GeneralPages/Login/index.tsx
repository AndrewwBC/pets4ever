import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";

import FormGroup from "../../../components/FormGroup";
import {
  AuthContainer,
  Container,
  Content,
  Form,
  RegisterContent,
} from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";
import { isEmailValid } from "../../../utils/isEmailValid";
import axios, { AxiosError } from "axios";

import { Toast } from "../../../components/Toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GlobalContext } from "../../../context/GlobalStorage";
import { FullLoader } from "../../../components/FullLoader";

export default function Login() {
  const { setData } = useContext(GlobalContext);
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
      fieldName: "",
      message: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  function handleEmailBlur({ target }: ChangeEvent<HTMLInputElement>) {
    const errorAlreadyExist = errors.find(
      (error) => error.fieldName === "Email"
    );

    if (
      !isEmailValid(target.value) &&
      target.value.length > 1 &&
      !errorAlreadyExist
    ) {
      setErrors((prevState) => [
        ...prevState,
        {
          fieldName: "Email",
          message: "Email inválido!",
        },
      ]);
    }
    if (isEmailValid(target.value)) {
      setErrors(errors.filter((error) => error.fieldName !== "Email"));
    }
  }

  function handleEmailChange({ target }: ChangeEvent<HTMLInputElement>) {
    setEmail(target.value);
    const fieldName = "email";

    const thereIsAnError = errors.find((erro) => erro.fieldName === fieldName);

    !isEmailValid(target.value) &&
      setErrors((prevState) => [
        ...prevState,
        {
          fieldName,
          message: "Email inválido!",
        },
      ]);

    if (thereIsAnError && isEmailValid(target.value)) {
      setErrors(errors.filter((error) => error.fieldName !== fieldName));
    }
  }

  function handlePasswordChange({ target }: ChangeEvent<HTMLInputElement>) {
    setPassword(target.value);

    const fieldName = "password";

    const valueLength = target.value.length;

    const errorAlreadyExists = errors.find(
      (error) => error.fieldName === fieldName
    );

    if (valueLength > 0 && valueLength < 6 && !errorAlreadyExists) {
      setErrors((prevState) => [
        ...prevState,
        {
          fieldName,
          message: "Insira ao menos seis caractéres.",
        },
      ]);
    }

    if (valueLength >= 6) {
      setErrors(errors.filter((error) => error.fieldName !== fieldName));
    }
  }

  async function Login(event: FormEvent) {
    event.preventDefault();
    if (!email && !password) {
      alert("Preencha os campos!");
      return;
    }

    try {
      setIsLoading(true);
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
        interface ErrorProps {
          fieldName: string;
          message: string;
        }

        const errorData: ErrorProps[] = err.response?.data;
        console.log(err.response);
        errorData.map(({ fieldName, message }) => {
          setErrors((prevState) => [
            {
              ...prevState,
              fieldName,
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
    } finally {
      setIsLoading(false);
    }
  }

  async function loginWithSession() {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      alert(token);
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
        interface ErrorProps {
          fieldName: string;
          message: string;
        }

        const errorData: ErrorProps[] = err.response?.data;
        console.log(errorData);
        errorData.map(({ fieldName, message }) => {
          setErrors((prevState) => [
            {
              ...prevState,
              fieldName,
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
    } finally {
      setIsLoading(false);
    }
  }

  function getErrorMessageByFieldName(fieldName: string): string | undefined {
    return errors.find((error) => error.fieldName?.includes(fieldName))
      ?.message;
  }

  if (isLoading) return <FullLoader />;

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
          <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("email")}>
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
            error={getErrorMessageByFieldName("password")}
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
            disabled={Boolean(errors.find((erro) => erro.fieldName))}
            size={"low"}
            label="Entrar"
            type="submit"
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
