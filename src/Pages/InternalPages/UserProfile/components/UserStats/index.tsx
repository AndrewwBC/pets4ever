import { Container } from "./styles";

export default function UserStatus() {
  return (
    <Container className="userStats">
      <div>
        <p>0</p>
        <small>Posts</small>
      </div>

      <div>
        <p>0</p>
        <small>Seguindo</small>
      </div>

      <div>
        <p>0</p>
        <small>Seguidores</small>
      </div>
    </Container>
  );
}
