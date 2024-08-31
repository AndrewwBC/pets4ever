import { useEffect, useState } from "react";

import FormGroup from "../../../components/FormGroup";
import { Container, Content, Form, RegisterContent } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";

import { Toast } from "../../../components/Toast";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../../../api/user/USER_API";
import { FullDogLoader } from "../../../components/FullDogLoader";
import MyError from "../../../api/user/errors/myError";
import { useAuth } from "../../../context/authProvider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const { state, setToken } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (state.token) {
      callSignInWithSession();
    }
  }, []);

  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const loginFormSchema = z.object({
    email: z.string().email({ message: "Email inválido." }),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,64}$/, {
        message: "Senha inválida.",
      }),
  });

  type LoginFormSchema = z.infer<typeof loginFormSchema>;

  const form = useForm<LoginFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  async function Login(data: LoginFormSchema) {
    setIsLoading(true);

    try {
      const response = await userApi.signIn(data);

      if (response && "token" in response) {
        setToken(response.token);
        console.log(response);

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
          setToast({
            message: "Email ou senha incorretos.",
            status: "error",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function callSignInWithSession() {
    await signInWithSession();
  }

  async function signInWithSession() {
    try {
      setIsLoading(true);
      const response = await userApi.singnInWithSession();
      console.log(response);
      if (response && "userId" in response) {
        localStorage.setItem("userId", response.userId);

        nav(`/feed`);
      }
    } catch (err) {
      console.log(err);
      setToast({
        message: "Erro ao logar com a sessão.",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function getErrorMessageByFieldName(
    fieldName: keyof LoginFormSchema
  ): string | undefined {
    return errors[fieldName]?.message;
  }

  if (isLoading) return <FullDogLoader />;

  return (
    <Container>
      <Content>
        <h1>Log in</h1>

        <Form onSubmit={handleSubmit(Login)}>
          <FormGroup label="E-MAIL" error={getErrorMessageByFieldName("email")}>
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Insira o seu e-mail."
            />
          </FormGroup>
          <FormGroup
            label="SENHA"
            error={getErrorMessageByFieldName("password")}
          >
            <Input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Insira a sua senha."
            />
          </FormGroup>

          <Link style={{ placeSelf: "flex-end" }} to="/forgotpassword">
            <span className="forgotPassword">Esqueceu a senha?</span>
          </Link>

          <Button size={"low"} label="Entrar" type="submit" />

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
