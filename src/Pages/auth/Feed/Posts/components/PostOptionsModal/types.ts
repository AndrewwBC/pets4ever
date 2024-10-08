import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../../../../../types/post";

export interface PostOptionsModalProps {
  post: PostProps;
  setModal: Dispatch<SetStateAction<boolean>>;
  api: () => Promise<any>;
}
