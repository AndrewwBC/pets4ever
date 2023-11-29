import { MyButton } from "./style";

interface ButtonProps {
  label: string;
  size?: string;
  type?: string;
}

export function Button({ size = "big", label, type = "submit" }: ButtonProps) {
  return (
    <MyButton size={size} type={type}>
      <span>{label}</span>
    </MyButton>
  );
}
