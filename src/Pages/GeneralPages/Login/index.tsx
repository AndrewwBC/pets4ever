import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";

import FormGroup from "../../../components/FormGroup";
import { Container, Content, Form, RegisterContent } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";
import { isEmailValid } from "../../../utils/isEmailValid";

import { Toast } from "../../../components/Toast";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalStorage";
import GoogleAuth from "../../../components/GoogleAuth";
import userApi from "../../../api/user/USER_API";
import { SignInErrorProps } from "./types";
import { FullDogLoader } from "../../../components/FullDogLoader";
import MyError from "../../../api/user/errors/myError";

export default function Login() {
  const { setData } = useContext(GlobalContext);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      callSignInWithSession();
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
    setIsLoading(true);
    if (!email && !password) {
      alert("Preencha os campos!");
      return;
    }

    try {
      const dataLogin = {
        email,
        password,
      };
      const response = await userApi.signIn(dataLogin);

      if (response && "token" in response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.userId);

        setData({
          userId: response.userId,
          name: response.username,
          email: response.email,
          userProfileImgUrl: response.userProfileImgUrl,
        });

        nav(`/feed`);
      }
    } catch (err) {
      if (err instanceof MyError) {
        if (err.code == "ERR_NETWORK") {
          setToast({
            message: err.message,
            status: "error",
          });
          return;
        }
        if (err.data) {
          const errorData: SignInErrorProps[] = err.data;
          errorData.map(({ fieldName, message }) => {
            setErrors((prevState) => [
              {
                ...prevState,
                fieldName,
                message,
              },
            ]);
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function callSignInWithSession() {
    await loginWithSession();
  }

  async function loginWithSession() {
    try {
      setIsLoading(true);
      const response = await userApi.singnInWithSession();

      if (response && "userId" in response) {
        localStorage.setItem("userId", response.userId);
        setData({
          userId: response.userId,
          name: response.username,
          email: response.email,
          userProfileImgUrl: response.userProfileImgUrl,
        });
        nav(`/feed`);
      }
    } catch (err) {
      setToast({
        message: "Erro ao logar com a sessão.",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function getErrorMessageByFieldName(fieldName: string): string | undefined {
    return errors.find((error) => error.fieldName?.includes(fieldName))
      ?.message;
  }

  if (isLoading) return <FullDogLoader />;

  return (
    <Container>
      <Content>
        <h1>Log in</h1>

        <GoogleAuth />

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
