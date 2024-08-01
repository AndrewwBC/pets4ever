import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

interface PasswordValidationsProps {
  passwordErrors: {
    numberOfChars: boolean;
    hasNotEmailInPassword: boolean;
    hasNumber: boolean;
    hasOneUpper: boolean;
    hasOneLower: boolean;
  };
}

export default function PasswordValidations({
  passwordErrors,
}: PasswordValidationsProps) {
  const findFalse = Object.values(passwordErrors).find(
    (error) => error === false
  );
  console.log(findFalse);
  const borderColor = findFalse === false ? "red" : "green";

  return (
    <div
      style={{ border: `2px solid ${borderColor}` }}
      className="validationInfo"
    >
      <div>
        <div className="validations">
          <div>
            {passwordErrors.numberOfChars ? (
              <FaCheck color="green" />
            ) : (
              <VscError />
            )}
            <span>8 a 64 caractéres</span>
          </div>
          <div>
            {passwordErrors.hasNotEmailInPassword ? (
              <FaCheck color="green" />
            ) : (
              <VscError />
            )}
            <span>Não use o email na senha</span>
          </div>
          <div>
            {passwordErrors.hasNumber ? (
              <FaCheck color="green" />
            ) : (
              <VscError />
            )}
            <span>Pelo menos 1 número</span>
          </div>
          <div>
            {passwordErrors.hasOneUpper ? (
              <FaCheck color="green" />
            ) : (
              <VscError />
            )}
            <span>Pelo menos 1 letra maiúscula.</span>
          </div>
          <div>
            {passwordErrors.hasOneLower ? (
              <FaCheck color="green" />
            ) : (
              <VscError />
            )}
            <span>Pelo menos 1 letra minúscula.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
