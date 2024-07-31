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
  return (
    <div className="validationInfo">
      <div>
        <div className="validations">
          <div>
            {passwordErrors.numberOfChars ? (
              <VscError />
            ) : (
              <FaCheck color="green" />
            )}
            <span>8 a 64 caractéres</span>
          </div>
          <div>
            {passwordErrors.hasNotEmailInPassword ? (
              <VscError />
            ) : (
              <FaCheck color="green" />
            )}
            <span>Não use o email na senha</span>
          </div>

          <div>
            {passwordErrors.hasNumber ? (
              <VscError />
            ) : (
              <FaCheck color="green" />
            )}{" "}
            <span>Pelo menos 1 número</span>
          </div>
          <div>
            {passwordErrors.hasOneUpper ? (
              <VscError />
            ) : (
              <FaCheck color="green" />
            )}{" "}
            <span> Pelo menos 1 letra maiúscula.</span>
          </div>
          <div>
            {passwordErrors.hasOneLower ? (
              <VscError />
            ) : (
              <FaCheck color="green" />
            )}{" "}
            <span> Pelo menos 1 letra minúscula.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
