import { ChangeEvent, useState } from "react";
import { Input } from "../input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Content } from "./styles";

interface InputPassword {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

function InputPassword({
  value,
  onChange,
  placeholder,
  onFocus,
}: InputPassword) {
  const [type, setType] = useState("password");

  return (
    <Content>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        onFocus={onFocus}
      />

      {type === "password" ? (
        <FaRegEyeSlash className="icon" onClick={() => setType("text")} />
      ) : (
        <FaRegEye className="icon" onClick={() => setType("password")} />
      )}
    </Content>
  );
}

export default InputPassword;
