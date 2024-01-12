import { useState } from "react";

interface ToastProperties {
  message: string;
  status: "error" | "success";
}

const useToast = () => {
  const [toast, setToast] = useState<ToastProperties>({
    message: "",
    status: "",
  });
  return { toast, setToast };
};

export default useToast;
