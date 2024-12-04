import { Content } from "./styles";
import PasswordUpdate from "./PasswordUpdate";
import EmailUpdate from "./EmailUpdate";
import PatchProfile from "./PatchProfile";
import Delete from "./Delete";
import { Outlet } from "react-router-dom";

const Config = () => {
  return (
    <Content>
      <PatchProfile />
      <EmailUpdate />
      <PasswordUpdate hasSession={true} />
      <Delete />
      <Outlet />
    </Content>
  );
};

export default Config;
