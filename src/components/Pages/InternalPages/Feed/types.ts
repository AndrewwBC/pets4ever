import { PostProps } from "../UserProfile/components/ProfileFeed/types";
import { ListOfLikesProps } from "./components/ListOfLikes/types";

export interface FeedPostProps extends PostProps {
  listOfLikes: ListOfLikesProps[];
  userLikedThisPost: boolean;
  quantityOfLikes: number;
}
