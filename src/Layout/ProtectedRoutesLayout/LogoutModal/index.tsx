import { createPortal } from "react-dom";
import { Container, Content, WarningContainer } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useUser } from "../../../context/UserProvider";
import { FullDogLoader } from "../../../components/FullDogLoader";

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
        clearUser();
        setLogoutModal(false);
        setConfirmLogout(false);
        clearTimeout(timer);
        nav("");
      }, 2000);
      setLogoutModal(false);
    }
    setLogoutModal(false);
  }
  if (confirmLogout) {
    return <FullDogLoader transparent={false} text="Encerrando a sessão..." />;
  }

  if (logoutModal)
    return createPortal(
      <Container>
        <Content>
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
        </Content>
      </Container>,
      document.getElementById("logoutModal")!
    );
  else return null;
}
