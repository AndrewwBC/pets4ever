import { Dispatch, SetStateAction, useState } from "react";

const useToast = (): {
  toast: {
    message: string;
    status: string;
  };
  setToast: Dispatch<SetStateAction<{ message: string; status: string }>>;
} => {
  const [toast, setToast] = useState({
    message: "",
    status: "",
  });
  return { toast, setToast };
};

export default useToast;
