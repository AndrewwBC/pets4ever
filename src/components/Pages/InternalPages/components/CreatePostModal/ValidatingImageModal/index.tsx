import { createPortal } from "react-dom";
import { Container } from "./styles";
import { useEffect } from "react";
import { Loader } from "../../../../../Loading/styles";
import { ImCheckboxChecked } from "react-icons/im";
import Confetti from "../../../../../Confetti";
import { MyButton } from "../../../../../Button/style";

export default function ValidatingImageModal({ isLoadingData, setModal }) {
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
