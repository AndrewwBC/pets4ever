import { PiDog } from "react-icons/pi";
import { Container } from "./styles";
import { Button } from "../../../../../../components/Button";
import { useNavigate } from "react-router-dom";

interface NoPostsProps {
  small: string;
  paragraph: string;
}

export default function NoPosts({ small, paragraph }: NoPostsProps) {
  const navigation = useNavigate();

  return (
    <Container>
      <div>
        <PiDog size={60} color="#A56ABA" />
        <small>{small}</small>
        <p>{paragraph}</p>
        <Button
          onClick={() => navigation("/feed/p/create")}
          size="low"
          label="Postar"
        />
      </div>
    </Container>
  );
}
