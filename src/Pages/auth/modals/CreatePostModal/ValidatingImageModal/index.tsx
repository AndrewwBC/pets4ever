import { createPortal } from "react-dom";
import { Container } from "./styles";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import Confetti from "../../../../../components/Confetti";
import { Button } from "../../../../../components/Button";
import { LuLoader } from "react-icons/lu";

interface ValidationImageModalProps {
  isLoadingData: {
    step: string;
    isLoading: boolean;
  };
  setModal: Dispatch<
    SetStateAction<{
      step: string;
      isLoading: boolean;
    }>
  >;
}

export default function ValidatingImageModal({
  isLoadingData,
  setModal,
}: ValidationImageModalProps) {
  useEffect(() => {}, [isLoadingData.step]);

  if (isLoadingData.step === "Validating")
    return createPortal(
      <Container>
        <div className="content">
          <LuLoader size={28} color="rgb(255, 9, 202)" />
          <p className="validating">Estamos validando a sua imagem.</p>
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );

  if (isLoadingData.step === "isNotAnimal")
    return createPortal(
      <Container>
        <div className="content">
          <div className="text">
            <p className="alert">Imagem recusada!</p>
            <p>Detectamos que a imagem não é de um animal.</p>
          </div>

          <Button
            onClick={() =>
              setModal({
                step: "",
                isLoading: false,
              })
            }
            size="low"
            label="Tente novamente"
          />
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );

  if (isLoadingData.step === "Posting")
    return createPortal(
      <Container>
        <div className="content">
          <p style={{ color: "#01C200", fontWeight: 700 }}>
            Sua imagem foi aceita!
          </p>
          <p style={{ color: "#01C200", fontWeight: 700 }}>
            Estamos registrando a sua postagem.
          </p>
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );

  if (isLoadingData.step === "Posted")
    return createPortal(
      <Container>
        <Confetti />
        <div className="content">
          <ImCheckboxChecked size={30} color="#01C200" />

          <p style={{ color: "#01C200", fontWeight: 700 }}>
            Postagem realizada com sucesso!
          </p>

          <Button
            label="Finalizar"
            size="low"
            onClick={() =>
              setModal({
                step: "successClose",
                isLoading: false,
              })
            }
          />
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );
}
