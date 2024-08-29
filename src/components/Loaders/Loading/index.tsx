import { createPortal } from "react-dom";
import { Container, Loader } from "./styles";

const Loading = () => {
  return createPortal(
    <Container>
      <Loader />
    </Container>,
    document.getElementById("modal")!
  );
};

export default Loading;
