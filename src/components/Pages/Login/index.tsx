import { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalStorage";

import FormGroup from "../../FormGroup";
import { Container, Content, Form } from "./style";
import { Input } from "../../input";
import { Button } from "../../Button";
import { isEmailValid } from "../../../utils/isEmailValid";
import axios from "axios";

import { Toast } from "../../Toast";
import { Link } from "react-router-dom";

export default function Login() {
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
  console.log(errors);

  const { setData } = useContext(GlobalContext);

  function handleEmailBlur({ target }) {
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

  function handlePasswordChange({ target }) {
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
      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });

      console.log(response);

      if (response) {
        setToast({
          message: response.data.message,
          status: "success",
        });
      }

      console.log(response);
    } catch (err) {
      console.log(err);
      setToast({
        message: "Erro no login",
        status: "error",
      });
    }
  }

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();

  //   if (!errors.find((item) => item.field !== "")) {
  //     Login();
  //   }
  // }

  function getErrorMessageByFieldName(fieldName: string): string | undefined {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  console.log(errors.find((erro) => erro.message));
  return (
    <Container>
      <Content>
        <h1>Pets4Ever</h1>

        <Form onSubmit={Login}>
          <FormGroup error={getErrorMessageByFieldName("Email")}>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={handleEmailBlur}
              placeholder="Email ou nome de usuário."
            />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName("Password")}>
            <Input
              value={password}
              type="password"
              onChange={handlePasswordChange}
              placeholder="Insira a sua senha."
            />
          </FormGroup>
          <Link to="/forgotpassword">
            <span className="forgotPassword">Esqueceu a senha?</span>
          </Link>

          <Button
            disabled={errors.find((erro) => (erro.message ? true : false))}
            size={"low"}
            label="Entrar"
          />
        </Form>
      </Content>

      {toast.message && <Toast toast={toast} setToast={setToast}></Toast>}
    </Container>
  );
}
