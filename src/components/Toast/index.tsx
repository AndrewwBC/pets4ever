import { useEffect } from "react";
import { Content, Modal } from "./styles";

interface ToastProps {
  setToast: () => void;
  toast: {
    message: string;
    status: string;
  };
}

export function Toast({ toast, setToast }: ToastProps) {
  useEffect(() => {
    setTimeout(() => {
      setToast({
        message: "",
        status: "",
      });
    }, 3000);

    return;
  });

  return (
    <Modal>
      <Content messageStatus={toast.status}>
        <span>{toast.message}</span>
      </Content>
    </Modal>
  );
}
