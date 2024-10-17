import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../../../../../types/post";

export interface PostOptionsModalProps {
  editPostDescriptionFunction: (postId: string) => void;
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
  getPosts?: () => Promise<any>;
  setPostModal?: Dispatch<SetStateAction<boolean>>;
}
