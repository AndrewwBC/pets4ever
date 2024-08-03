import { ButtonHTMLAttributes } from "react";
import { MyButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "big" | "medium" | "low";
  label: string;
  disabled?: boolean;
}

export function Button({
  size = "big",
  label,
  type = "submit",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <MyButton onClick={onClick} disabled={disabled} size={size} type={type}>
      <span>{label}</span>
    </MyButton>
  );
}
