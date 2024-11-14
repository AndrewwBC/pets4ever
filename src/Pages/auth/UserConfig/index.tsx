import { Content } from "./styles";
import PasswordUpdate from "./PasswordUpdate";
import EmailUpdate from "./EmailUpdate";
import PatchProfile from "./PatchProfile";
import Delete from "./Delete";

const Config = () => {
  return (
    <Content>
      <PatchProfile />
      <EmailUpdate />
      <PasswordUpdate hasSession={true} />
      <Delete />
    </Content>
  );
};

export default Config;
