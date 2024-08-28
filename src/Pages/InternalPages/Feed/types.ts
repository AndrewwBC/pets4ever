import { PostProps } from "../UserProfile/components/ProfileFeed/types";

interface ListOfLikesProps {
  userId: string;
  username: string;
  userProfilePhotoUrl: string;
}

export interface FeedPostProps extends PostProps {
  listOfLikes: ListOfLikesProps[];
  userLikedThisPost: boolean;
  quantityOfLikes: number;
}
