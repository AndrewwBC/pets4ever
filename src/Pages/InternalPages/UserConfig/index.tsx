import Delete from "./Delete";
import { Content } from "./styles";
import Update from "./ProfileUpdate";
import PasswordUpdate from "./PasswordUpdate";
import EmailUpdate from "./EmailUpdate";

const Config = () => {
  return (
    <Content>
      <Update />
      <EmailUpdate />
      <PasswordUpdate />
      {/* <Delete /> */}
    </Content>
  );
};

export default Config;
