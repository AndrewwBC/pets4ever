import { ReactNode } from "react";
import { Content } from "./styles";

interface FormGroupProps {
  error?: string | undefined;
  children: ReactNode;
}

export default function FormGroup({ error, children }: FormGroupProps) {
  return (
    <Content error={error}>
      <small>{error}</small>
      {children}
    </Content>
  );
}
