import { Content } from "./styles";
import PasswordUpdate from "./PasswordUpdate";
import EmailUpdate from "./EmailUpdate";
import PatchProfile from "./PatchProfile";

const Config = () => {
  return (
    <Content>
      <PatchProfile />
      <EmailUpdate />
      <PasswordUpdate />
    </Content>
  );
};

export default Config;
