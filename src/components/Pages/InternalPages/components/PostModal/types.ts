import { Dispatch, SetStateAction } from "react";
import { PostProps } from "../../UserProfile/components/ProfileFeed/types";
import { FeedPostProps } from "../../Feed/types";

export interface PostModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalPostData: PostProps | boolean;
  setModalPostData: Dispatch<SetStateAction<FeedPostProps | null>>;
}

export function isPostProps(obj: any): obj is FeedPostProps {
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
