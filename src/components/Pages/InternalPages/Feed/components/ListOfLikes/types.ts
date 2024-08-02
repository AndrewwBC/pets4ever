import { Dispatch, SetStateAction } from "react";

export interface LikeProps {
  userId: string;
  username: string;
  userProfilePhotoUrl: string;
}

export interface ListOfLikesProps {
  listOfLikes: {
    modalState: boolean;
    data: LikeProps[] | undefined;
  };
  setModal: Dispatch<
    SetStateAction<{
      modalState: boolean;
      data: LikeProps[] | undefined;
    }>
  >;
}

export interface ListOfLikesStateProps {
  modalState: boolean;
  data: LikeProps[] | undefined;
}
