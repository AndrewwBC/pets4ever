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
      console.log("Primeiro");
    }, 3000);

    console.log("Segundo");
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
