import { createPortal } from "react-dom";
import { Container, Content, WarningContainer } from "./styles";
import { TextContainer } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

import { useNavigate } from "react-router-dom";
import DogLoader from "../../../components/FullDogLoader/components/DogLoader";
import { Button } from "../../../components/Button";
import { useUser } from "../../../context/UserProvider";

interface LogoutModalProps {
  logoutModal: boolean;
  setLogoutModal: Dispatch<SetStateAction<boolean>>;
}

export default function LogoutModal({
  logoutModal,
  setLogoutModal,
}: LogoutModalProps) {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const nav = useNavigate();
  const { clearUser } = useUser();

  function handleLogoutConfirmation(option: boolean) {
    if (option) {
      setConfirmLogout(true);

      const timer = setTimeout(() => {
        nav("");
        setLogoutModal(false);
        clearTimeout(timer);
        clearUser();
      }, 2000);
    } else setLogoutModal(false);
  }

  if (logoutModal)
    return createPortal(
      <Container>
        <Content>
          {!confirmLogout ? (
            <WarningContainer>
              <span>Confirme a saída no botão</span>
              <div className="buttons">
                <Button
                  onClick={() => handleLogoutConfirmation(true)}
                  size="medium"
                  label="Sair"
                />
                <Button
                  onClick={() => handleLogoutConfirmation(false)}
                  size="medium"
                  label="Cancelar"
                />
              </div>
            </WarningContainer>
          ) : (
            <>
              <TextContainer>
                <p>Desconectando...</p>
              </TextContainer>

              <DogLoader />
            </>
          )}
        </Content>
      </Container>,
      document.getElementById("logoutModal")!
    );
  else return null;
}
