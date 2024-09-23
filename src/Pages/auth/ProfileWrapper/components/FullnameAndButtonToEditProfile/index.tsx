import { Link } from "react-router-dom";
import { PurpleButton } from "../../../../../components/purpleButton";
import { Content } from "./styles";

interface Props {
  fullname: string;
}

function FullnameAndButtonToEditProfile({ fullname }: Props) {
  return (
    <Content>
      <p className="fullname">{fullname}</p>
      <Link to={"/config"}>
        <PurpleButton>Editar Perfil</PurpleButton>
      </Link>
    </Content>
  );
}

export default FullnameAndButtonToEditProfile;
