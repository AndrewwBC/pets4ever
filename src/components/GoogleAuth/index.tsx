import { FcGoogle } from "react-icons/fc";
import { AuthContainer } from "./styles";

export default function GoogleAuth() {
  return (
    <AuthContainer>
      <div className="loginWithGoogle">
        <FcGoogle size={22} />
        <span>Registre-se com Google</span>
      </div>
    </AuthContainer>
  );
}
