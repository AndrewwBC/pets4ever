import {
  FollowersProps,
  FollowingProps,
} from "../../../../../api/user/types/profileResponse";

export interface QuantityOfPostFollowersAndFollowingProps {
  postQuantity: number;
  followers: FollowersProps;
  following: FollowingProps;
}
