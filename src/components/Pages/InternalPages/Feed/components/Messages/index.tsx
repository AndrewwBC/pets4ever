import { TiMessages } from "react-icons/ti";
import { MessagesContainer } from "./styles";

const Messages = () => {
  return (
    <MessagesContainer>
      <div>
        <TiMessages size={26} color="white" />
      </div>
    </MessagesContainer>
  );
};

export default Messages;
