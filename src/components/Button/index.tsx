import { MyButton } from "./style";

interface ButtonProps {
  label: string;
  type: string;
}

export function Button({ label, type = "submit" }: ButtonProps) {
  return (
    <MyButton type={type}>
      <span>{label}</span>
    </MyButton>
  );
}
