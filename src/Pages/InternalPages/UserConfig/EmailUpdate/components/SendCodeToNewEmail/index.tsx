import { ChangeEvent, FormEvent, useContext, useState } from "react";
import FormGroup from "../../../../../../components/FormGroup";
import { Input } from "../../../../../../components/input";
import { isEmailValid } from "../../../../../../utils/isEmailValid";
import { GlobalContext } from "../../../../../../context/GlobalStorage";
import { Button } from "../../../../../../components/Button";
import userApi from "../../../../../../api/user/USER_API";
import { SectionTitle } from "../../../components/sectionTitle";
import { Toast } from "../../../../../../components/Toast";
import VerifyCode from "../VerifyCode";
import { Section } from "./styles";
import EMAIL_API from "../../../../../../api/email/EMAIL_API";

interface StepProps {
  step: "sendEmail" | "verifyCode";
}

export default function SendCodeToNewEmail() {
  const { data, setData } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
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

  function handleEmailSubmit() {
    setStep({
      step: "verifyCode",
    });
  }

  function handleVerifyCodeAndUpdateEmail() {
    console.log(code);
  }

  function getErrorByFieldname(field: string) {
    if (!isEmailValid(email) && email.length > 2) {
      const isEmailNotValid = {
        message: "Email inválido",
      };
      return isEmailNotValid.message;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const emailData = {
      email,
    };

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

  return (
    <Section>
      {toast.message && <Toast setToast={setToast} toast={toast} />}
      <SectionTitle>Editar Email</SectionTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup label="E-MAIL" error={getErrorByFieldname("email")}>
          <Input
            type="email"
            error={getErrorByFieldname("email")}
            placeholder={"Insira o seu email."}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleEmailChange(e.target.value)
            }
          />
        </FormGroup>
        <p className="advice">Enviaremos um código para o seu Email.</p>
        {step.step === "verifyCode" && <VerifyCode />}

        {step.step === "sendEmail" ? (
          <Button
            onClick={() => handleEmailSubmit()}
            label="Receber código"
            size="low"
          />
        ) : (
          <Button
            onClick={() => handleVerifyCodeAndUpdateEmail()}
            label="Validar"
            size="low"
          />
        )}
      </form>
    </Section>
  );
}
