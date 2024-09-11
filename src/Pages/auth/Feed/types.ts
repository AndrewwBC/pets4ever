import { PostProps } from "../ProfileWrapper/components/ProfileFeed/types";

interface ListOfLikesProps {
  userId: string;
  username: string;
  profileImgUrl: string;
}

export interface FeedPostProps extends PostProps {
  listOfLikes: ListOfLikesProps[];
  userLikedThisPost: boolean;
  quantityOfLikes: number;
}
