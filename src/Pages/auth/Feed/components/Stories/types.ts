import { StoriesProps } from "../../../../../api/storie/types";

export interface CreateStatusProps {
  isLoading: boolean;
  success: boolean | undefined;
  iaError: boolean;
}

export interface StoriesModalProps {
  storie: StoriesProps | undefined;
  modalState: boolean;
}
