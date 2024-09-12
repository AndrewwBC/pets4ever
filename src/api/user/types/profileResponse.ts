import { FeedPostProps } from "../../../Pages/auth/Feed/types";

export interface UsernameAndProfileImgUrlProps {
  username: string;
  profileImgUrl: string;
}

export interface FollowersProps {
  followersList: UsernameAndProfileImgUrlProps[];
  quantity: number;
}

export interface FollowingProps {
  followingList: UsernameAndProfileImgUrlProps[];
  quantity: number;
}

export interface UserProps {
  fullname: string;
  username: string;
  userId: string;
  email: string;
  profileImgUrl: string;
  followers: FollowersProps;
  following: FollowingProps;
  userPostsAndQuantityOfPosts: {
    posts: FeedPostProps[];
    quantity: number;
  };
}
