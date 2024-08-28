import {
  FollowersProps,
  FollowingProps,
} from "../../../../../apis/user/types/profileResponse";

export interface QuantityOfPostFollowersAndFollowingProps {
  postQuantity: number;
  followers: FollowersProps;
  following: FollowingProps;
}
