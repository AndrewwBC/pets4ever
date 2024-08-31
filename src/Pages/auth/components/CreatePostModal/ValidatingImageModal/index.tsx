import { createPortal } from "react-dom";
import { Container } from "./styles";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import Confetti from "../../../../../components/Confetti";
import { MyButton } from "../../../../../components/Button/style";
import { Loader } from "../../../../../components/Loaders/Loading/styles";

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
  useEffect(() => {
    console.log("Entrou");
  }, [isLoadingData.step]);

  if (isLoadingData.step === "Validating")
    return createPortal(
      <Container>
        <div className="content">
          <Loader />
          <p>Estamos validando a sua imagem.</p>
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );

  if (isLoadingData.step === "Posting")
    return createPortal(
      <Container>
        <div className="content">
          <Loader />
          <p style={{ color: "green", fontWeight: 700 }}>
            Sua imagem foi aceita!
          </p>
          <p style={{ color: "green", fontWeight: 700 }}>
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
          <ImCheckboxChecked size={30} color="green" />

          <p style={{ color: "green", fontWeight: 700 }}>
            Postagem realizada com sucesso!
          </p>

          <MyButton
            size="medium"
            onClick={() =>
              setModal({
                step: "",
                isLoading: false,
              })
            }
          >
            Finalizar
          </MyButton>
        </div>
      </Container>,
      document.getElementById("validatingImageModal")!
    );
}
