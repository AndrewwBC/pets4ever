import { ChangeEvent, FormEvent, useState } from "react";
import FormGroup from "../../../../../../components/FormGroup";
import { Input } from "../../../../../../components/input";
import { isEmailValid } from "../../../../../../utils/isEmailValid";
import { Button } from "../../../../../../components/Button";
import { SectionTitle } from "../../../components/sectionTitle";
import { Toast } from "../../../../../../components/Toast";
import VerifyCode from "../VerifyCode";
import { Section } from "./styles";
import EMAIL_API from "../../../../../../api/email/EMAIL_API";
import CODE_API from "../../../../../../api/code/CODE_API";
import { useUser } from "../../../../../../context/UserProvider";
import { FullDogLoader } from "../../../../../../components/FullDogLoader";

interface StepProps {
  step: "sendEmail" | "verifyCode";
}

export default function SendCodeToNewEmail() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();

  const [step, setStep] = useState<StepProps>({
    step: "sendEmail",
  });

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function getError() {
    if (!isEmailValid(email) && email.length > 2) {
      const isEmailNotValid = {
        message: "Email inválido",
      };
      return isEmailNotValid.message;
    }
  }

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await EMAIL_API.sendCodeToEmail(email);

      if (response) {
        setToast({
          message: response.message,
          status: "success",
        });

        setStep({
          step: "verifyCode",
        });
      }
    } catch (err: any) {
      setToast({
        message: err.message,
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyCodeAndUpdateEmail(e: FormEvent) {
    const validateCodeData = {
      code,
      email,
      userId: user?.userId!,
    };

    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await CODE_API.validateCode(validateCodeData);

      setToast({
        message: response.message,
        status: "success",
      });

      setStep({ step: "sendEmail" });
      setEmail("");
    } catch (err: any) {
      setToast({
        message: err.message,
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      {isLoading && <FullDogLoader transparent={true} />}
      <SectionTitle>Editar Email</SectionTitle>
      <form>
        <FormGroup label="E-MAIL" error={getError()}>
          <Input
            type="email"
            disabled={step.step === "verifyCode" ? true : false}
            error={getError()}
            placeholder={"Insira o novo email."}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleEmailChange(e.target.value)
            }
          />
        </FormGroup>
        <p className="advice">Enviaremos um código para o email.</p>
        {step.step === "verifyCode" && (
          <VerifyCode code={code} setCode={setCode} />
        )}

        {step.step === "sendEmail" ? (
          <Button
            type="submit"
            onClick={(e) => handleEmailSubmit(e)}
            label="Receber código"
            size="low"
          />
        ) : (
          <Button
            type="submit"
            onClick={(e) => handleVerifyCodeAndUpdateEmail(e)}
            label="Validar"
            size="low"
          />
        )}
      </form>
    </Section>
  );
}
