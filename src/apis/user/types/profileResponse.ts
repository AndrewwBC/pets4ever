import { FeedPostProps } from "../../../Pages/InternalPages/Feed/types";

interface UserIdNameAndImageProps {
  name: string;
  userId: string;
  profileImageUrl: string;
}

export interface FollowersProps {
  followersList: UserIdNameAndImageProps[];
  quantity: number;
}

export interface FollowingProps {
  followingList: UserIdNameAndImageProps[];
  quantity: number;
}

export interface ProfileResponse {
  email: string;
  username: string;
  userImageProfileUrl: string;
  followers: FollowersProps;
  following: FollowingProps;
  userPostsAndQuantityOfPosts: {
    posts: FeedPostProps[];
    quantity: number;
  };
}
