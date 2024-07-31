import { ReactNode } from "react";
import { Content } from "./styles";

interface FormGroupProps {
  error?: string | undefined;
  children: ReactNode;
  label?: string;
}

export default function FormGroup({ error, children, label }: FormGroupProps) {
  return (
    <Content error={error}>
      <label>
        <p>{label}</p>
        {children}
      </label>
      <small>{error}</small>
    </Content>
  );
}
