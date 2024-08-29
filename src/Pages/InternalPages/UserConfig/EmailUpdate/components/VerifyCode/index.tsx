import { ChangeEvent, useState } from "react";
import FormGroup from "../../../../../../components/FormGroup";
import { Input } from "../../../../../../components/input";

function VerifyCode() {
  const [code, setCode] = useState("");

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
