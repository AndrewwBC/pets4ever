import { MyButton } from "./style";

interface ButtonProps {
  label: string;
  size?: "big" | "medium" | "low";
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
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
