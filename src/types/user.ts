import { PostProps } from "./post";

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
  bio: string;
  raca: string;
  userId: string;
  email: string;
  routeTest?: string;
  profileImgUrl: string;
  followers: FollowersProps;
  following: FollowingProps;
  userPostsAndQuantityOfPosts: {
    posts: PostProps[];
    quantity: number;
  };
}
