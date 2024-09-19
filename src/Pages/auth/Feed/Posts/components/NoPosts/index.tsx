import { PiDog } from "react-icons/pi";
import { Container } from "./styles";
import { Button } from "../../../../../../components/Button";

interface NoPostsProps {
  small: string;
  paragraph: string;
}

export default function NoPosts({ small, paragraph }: NoPostsProps) {
  return (
    <Container>
      <div>
        <PiDog size={60} color="#A56ABA" />
        <small>{small}</small>
        <p>{paragraph}</p>
        <Button size="low" label="Postar" />
      </div>
    </Container>
  );
}
