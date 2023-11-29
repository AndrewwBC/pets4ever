import { Content, Modal } from "./styles";

interface ToastProps {
  setToast: () => void;
  toast: {
    message: string;
    status: string;
  };
}

export function Toast({ toast, setToast }: ToastProps) {
  return (
    <Modal>
      <Content messageStatus={toast.status}>
        <span>{toast.message}</span>
        <button onClick={() => setToast("")}>X</button>
      </Content>
    </Modal>
  );
}
