import { FeedPostProps } from "../../../Pages/auth/Feed/types";

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
