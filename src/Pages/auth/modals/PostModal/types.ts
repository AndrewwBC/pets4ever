import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../../../types/post";

export interface PostModalProps {
  getPosts: () => Promise<any>;
  editDescription: boolean;
  setEditPost: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalPostData: PostProps | null;
  setModalPostData: Dispatch<SetStateAction<PostProps | null>>;
  handlePostLikePut: (postId: string) => Promise<void>;
}

export function isPostProps(obj: any): obj is PostProps {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.creationDate === "string" &&
    typeof obj.description === "string" &&
    typeof obj.imageUrl === "string" &&
    typeof obj.name === "string" &&
    typeof obj.postId === "string" &&
    typeof obj.userId === "string" &&
    typeof obj.userProfileImageUrl === "string" &&
    typeof obj.quantityOfLikes === "number" &&
    Array.isArray(obj.comments)
  );
}
