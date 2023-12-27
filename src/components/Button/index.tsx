import { MyButton } from "./style";

interface ButtonProps {
  label: string;
  size?: string;
  type?: string;
  disabled?: boolean;
}

export function Button({
  size = "big",
  label,
  type = "submit",
  disabled = false,
}: ButtonProps) {
  return (
    <MyButton disabled={disabled} size={size} type={type}>
      <span>{label}</span>
    </MyButton>
  );
}
