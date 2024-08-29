import { ChangeEvent, Dispatch, SetStateAction } from "react";
import FormGroup from "../../../../../../components/FormGroup";
import { Input } from "../../../../../../components/input";

interface VerifyCodeProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

function VerifyCode({ code, setCode }: VerifyCodeProps) {
  return (
    <FormGroup>
      <label>
        <p>Código</p>

        <Input
          type="text"
          placeholder={"Valide o código"}
          value={code}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
      </label>
    </FormGroup>
  );
}

export default VerifyCode;
