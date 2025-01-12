import { useState } from "react";
import FormGroup from "../../../components/FormGroup";
import { Container, Content, Form, RegisterContent } from "./styles";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";
import { Toast } from "../../../components/Toast";
import { Link, useNavigate } from "react-router-dom";
import { FullDogLoader } from "../../../components/FullDogLoader";
import MyError from "../../../api/user/errors/myError";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "./zodSchema";
import USER_API from "../../../api/user/USER_API";
import { useUser } from "../../../context/UserProvider";
import { useInterceptor } from "../../../context/utils/myInterceptor";
import { Helmet } from "react-helmet";

export default function Login() {
  const nav = useNavigate();

  const { retrieveUser } = useUser();

  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(loginFormSchema),
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  async function Login(data: LoginFormSchema) {
    setIsLoading(true);

    try {
      const response = await USER_API.signIn(data);

      if (response) {
        useInterceptor();
        retrieveUser(true);
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

  function getErrorMessageByFieldName(
    fieldName: keyof LoginFormSchema
  ): string | undefined {
    return errors[fieldName]?.message;
  }

  if (isLoading)
    return (
      <FullDogLoader text="Carregando seus dados..." transparent={false} />
    );

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
              required
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
              required
            />
          </FormGroup>

          <Link style={{ placeSelf: "flex-end" }} to="/forgotpassword">
            <span className="forgotPassword">Esqueceu a senha?</span>
          </Link>

          <Button size={"low"} label="Entrar" type="submit" />

          <RegisterContent>
            <div>
              <p>Não possui uma conta?</p>
            </div>
            <Link to="/register">
              <span className="registerLink"> Registre-se</span>
            </Link>
          </RegisterContent>
        </Form>
      </Content>

      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </Container>
  );
}
