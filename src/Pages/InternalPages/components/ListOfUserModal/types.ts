import { Dispatch, SetStateAction } from "react";

export interface UserProps {
  userId: string;
  username: string;
  userProfilePhotoUrl: string;
}

export interface ListOfUserProps {
  listOfUsers: {
    modalState: boolean;
    data: UserProps[] | undefined;
  };
  setModal: Dispatch<
    SetStateAction<{
      modalState: boolean;
      data: UserProps[] | undefined;
    }>
  >;
}

export interface ListOfUserStateProps {
  modalState: boolean;
  data: UserProps[] | undefined;
}
