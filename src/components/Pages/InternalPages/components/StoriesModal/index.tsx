import { createPortal } from "react-dom";

const StoriesModal = () => {
  return createPortal(<div>Olá</div>, document.getElementById("storiesModal")!);
};

export default StoriesModal;
