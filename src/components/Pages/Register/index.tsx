import { useState } from "react";
import FormGroup from "../../FormGroup";
import { Input } from "../../input";
import { Button } from "../../Button";

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

  function handleConfirmPassword({ target }) {
    const fieldConfirmPass = "confirmPass";

    const errorAlreadyExists = errors.find(
      (erro) => erro.field === fieldConfirmPass
    );

    if (registerData.senha !== target.value && !errorAlreadyExists)
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

  return (
    <main>
      <h1>Cadastre-se!</h1>

      <p>
        Apenas quatro informações para iniciar uma <span>conta</span>.
      </p>

      <div>
        <form>
          <FormGroup>
            <Input
              placeholder="Nome de usuário"
              onChange={({ target }) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  name: target.value,
                }))
              }
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Email"
              onChange={({ target }) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  email: target.value,
                }))
              }
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Senha"
              onChange={({ target }) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  senha: target.value,
                }))
              }
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Confirme sua senha"
              onBlur={handleConfirmPassword}
              type="password"
            />
          </FormGroup>

          <Button type="submit" size="medium" label="Registrar" />
        </form>
      </div>
    </main>
  );
}
