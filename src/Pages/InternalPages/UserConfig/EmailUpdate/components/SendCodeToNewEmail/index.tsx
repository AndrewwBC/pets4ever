import { ChangeEvent, FormEvent, useContext, useState } from "react";
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
import { GlobalContext } from "../../../../../../context/GlobalStorage";

interface StepProps {
  step: "sendEmail" | "verifyCode";
}

export default function SendCodeToNewEmail() {
  const { data } = useContext(GlobalContext);

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });

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
    setStep({
      step: "verifyCode",
    });
    try {
      const response = await EMAIL_API.sendCodeToEmail(email);
      console.log(response);

      if (response) {
        setToast({
          message: response.message,
          status: "success",
        });

        // setData((previewData) => ({
        //   ...previewData,
        //   email: emailData.email,
        // }));
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleVerifyCodeAndUpdateEmail(e: FormEvent) {
    const validateCodeData = {
      code,
      email,
      userId: data.userId,
    };

    e.preventDefault();
    try {
      const response = await CODE_API.validateCode(validateCodeData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Email</SectionTitle>
      <form>
        <FormGroup label="E-MAIL" error={getError()}>
          <Input
            type="email"
            error={getError()}
            placeholder={"Insira o seu email."}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleEmailChange(e.target.value)
            }
          />
        </FormGroup>
        <p className="advice">Enviaremos um código para o seu Email.</p>
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