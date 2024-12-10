import { ReactNode } from "react";
import { Content } from "./styles";

interface FormGroupProps {
  error?: string | undefined;
  children: ReactNode;
  label?: string;
  visible?: boolean;
}

export default function FormGroup({
  error,
  children,
  label,
  visible = true,
}: FormGroupProps) {
  return (
    <Content style={{ display: visible ? "block" : "none" }} error={error}>
      <label>
        <p>{label}</p>
        {children}
      </label>
      <small>{error}</small>
    </Content>
  );
}
