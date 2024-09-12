import { PiDog } from "react-icons/pi";
import { Container } from "./styles";
import { Button } from "../../../../../../components/Button";

export default function NoPosts() {
  return (
    <Container>
      <div>
        <PiDog size={60} color="#A56ABA" />
        <small>Ainda não há postagens.</small>
        <p>Seja o primeiro!</p>
        <Button size="low" label="Postar" />
      </div>
    </Container>
  );
}
