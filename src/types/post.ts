import { Comment } from "./comment";
import { ListOfUserProps } from "./listOfUsers";

export interface PostProps {
  creationDate: string;
  description: string;
  imageUrl: string;
  username: string;
  postId: string;
  userId: string;
  profileImgUrl: string;
  comments: Comment[];
  listOfLikes: ListOfUserProps[];
  userLikedThisPost: boolean;
  quantityOfLikes: number;
}

export interface PostArrayProps {
  posts?: PostProps[];
}
