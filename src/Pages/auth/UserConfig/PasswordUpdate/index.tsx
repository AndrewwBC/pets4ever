import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormGroup from "../../../../components/FormGroup";
import { Button } from "../../../../components/Button";
import { SectionTitle } from "../components/sectionTitle";
import { Toast } from "../../../../components/Toast";
import PasswordValidations from "../../../no-auth/Register/components/PasswordValidations";
import InputPassword from "../../../../components/InputPassword";
import USER_API from "../../../../api/user/USER_API";
import { useUser } from "../../../../context/UserProvider";
import MyError from "../../../../api/user/errors/myError";
import { useNavigate, useSearchParams } from "react-router-dom";

interface PasswordUpdateProps {
  hasSession: boolean;
}

export default function PasswordUpdate({ hasSession }: PasswordUpdateProps) {
  const { user } = useUser();
  const navigate = useNavigate();

  let [params] = useSearchParams();

  useEffect(() => {
    if (!params.get("code") || !params.get("username")) {
      setToast({
        message: "LINK INCOMPLETO",
        status: "error",
      });

      const timer = setTimeout(() => {
        navigate("/");
        clearTimeout(timer);
      }, 2000);
    }
  }, []);

  const [forgotPassword, setForgotPassword] = useState({
    password: "",
    confirmedPassword: "",
    isAble: false,
  });

  const [data, setData] = useState({
    actualPassword: "",
    newPassword: "",
  });
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [responseErrors, setResponseErrors] = useState([
    { fieldName: "", message: "" },
  ]);

  const [passwordErrors, setPasswordErros] = useState({
    numberOfChars: false,
    hasNumber: false,
    hasOneUpper: false,
    hasOneLower: false,
  });

  function handlePassword({ target }: ChangeEvent<HTMLInputElement>) {
    const password = target.value;
    const hasNumber = /\d/.test(password);
    const hasOneLower = /[a-z]/.test(password);
    const hasOneUpper = /[A-Z]/.test(password);

    setPasswordErros({
      numberOfChars: password.length >= 8,
      hasNumber,
      hasOneLower,
      hasOneUpper,
    });

    if (hasSession) {
      setData((prevState) => ({
        ...prevState,
        newPassword: password,
      }));
    } else {
      setForgotPassword((prevState) => ({
        ...prevState,
        password,
        isAble: password === prevState.confirmedPassword,
      }));
    }
  }

  function handleForgotPasswordChange({
    target,
  }: ChangeEvent<HTMLInputElement>) {
    setForgotPassword((prevState) => ({
      ...prevState,
      confirmedPassword: target.value,
      isAble: target.value === prevState.password,
    }));
  }

  function handleDisableButton() {
    if (hasSession) {
      if (data.newPassword.length < 1) return true;
      const passwordError = findPasswordError("newPassword");
      return Boolean(passwordError);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!forgotPassword.isAble) {
      setToast({
        message: "As senhas devem ser iguais",
        status: "error",
      });
      return;
    }

    setResponseErrors(responseErrors.filter((error) => error.message !== ""));

    if (hasSession && data.actualPassword === data.newPassword) {
      setToast({
        message: "A nova senha não pode ser igual a senha atual.",
        status: "error",
      });
      return;
    }

    const forgotPasswordData = {
      username: params.get("username"),
      code: params.get("username"),
      newPassword: forgotPassword.password,
    };

    const callAPI: any = hasSession
      ? await USER_API.patchPassword(user?.username!, data)
      : await USER_API.patchPasswordWithoutSession(forgotPasswordData);

    try {
      console.log("trye");
      const response = await callAPI();

      if (response) {
        setData({
          actualPassword: "",
          newPassword: "",
        });
        setForgotPassword({
          password: "",
          confirmedPassword: "",
          isAble: false,
        });
        setToast({
          message: "Senha atualizada",
          status: "success",
        });
      }
    } catch (err: any) {
      if (err instanceof MyError) {
        if (err.data) {
          setResponseErrors(err.data);
        }
      }
    }
  }

  function findPasswordError(fieldName: string) {
    const responseError = responseErrors.find(
      (error) => error.fieldName === fieldName
    )?.message;
    if (responseError) return responseError;

    const findFalse = Object.values(passwordErrors).find(
      (error) => error === false
    );
    if (fieldName === "newPassword" && data.newPassword.length > 2)
      return findFalse === false ? "Verifique as condições!" : "";
  }
  console.log(forgotPassword);

  return (
    <section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      {hasSession && <SectionTitle>Editar Senha</SectionTitle>}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {hasSession ? (
          <FormGroup
            label="SENHA ATUAL"
            error={findPasswordError("actualPassword")}
          >
            <InputPassword
              placeholder="Digite a senha atual"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData((prevState) => ({
                  ...prevState,
                  actualPassword: e.target.value,
                }))
              }
              value={data.actualPassword}
            />
          </FormGroup>
        ) : (
          <FormGroup
            label="NOVA SENHA"
            error={findPasswordError("newPassword")}
          >
            <InputPassword
              placeholder="Digite a nova senha"
              onChange={handlePassword}
              value={forgotPassword.password}
            />
          </FormGroup>
        )}
        <FormGroup
          label={hasSession ? "NOVA SENHA" : "CONFIRME A SENHA"}
          error={findPasswordError("newPassword")}
        >
          <InputPassword
            placeholder={
              hasSession ? "Digite a sua nova senha" : "Confirme a senha"
            }
            onChange={hasSession ? handlePassword : handleForgotPasswordChange}
            onFocus={() => setFocusedPassword(true)}
            value={
              hasSession ? data.newPassword : forgotPassword.confirmedPassword
            }
          />
        </FormGroup>
        {focusedPassword && (
          <PasswordValidations passwordErrors={passwordErrors} />
        )}
        <Button
          disabled={handleDisableButton()}
          label="Editar Senha"
          size="low"
        />
      </form>
    </section>
  );
}
