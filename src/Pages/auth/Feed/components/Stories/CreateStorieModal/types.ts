import { Dispatch, SetStateAction } from "react";
import { CreateStatusProps } from "../types";

export interface CreateStorieModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  setCreateStatus: Dispatch<SetStateAction<CreateStatusProps>>;
}
