import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../../../../../types/post";

export interface PostOptionsModalProps {
  setModal: Dispatch<
    SetStateAction<{
      state: boolean;
      post: PostProps | undefined;
    }>
  >;
  modal: {
    state: boolean;
    post: PostProps | undefined;
  };
  api: () => Promise<any>;
}
