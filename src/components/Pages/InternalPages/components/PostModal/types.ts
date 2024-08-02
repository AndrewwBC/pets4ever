import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../UserProfile/components/ProfileFeed/types";

export interface PostModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalPostData: PostProps | boolean;
  setModalPostData: Dispatch<SetStateAction<PostProps | boolean>>;
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
    Array.isArray(obj.comments)
  );
}
