import { ReactNode } from "react";
import { Content } from "./styles";

interface FormGroupProps {
  error?: string;
  children: ReactNode;
}

export default function FormGroup({ error, children }: FormGroupProps) {
  return (
    <Content error={error}>
      {children}
      <small>{error}</small>
    </Content>
  );
}
