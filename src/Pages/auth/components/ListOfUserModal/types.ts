import { Dispatch, SetStateAction } from "react";
import { UsernameAndProfileImgUrlProps } from "../../../../api/user/types/profileResponse";

export interface ListOfUserProps {
  listOfUsers: {
    modalState: boolean;
    data: UsernameAndProfileImgUrlProps[] | undefined;
  };
  setModal: Dispatch<
    SetStateAction<{
      modalState: boolean;
      data: UsernameAndProfileImgUrlProps[] | undefined;
    }>
  >;
}

export interface ListOfUserStateProps {
  modalState: boolean;
  data: UsernameAndProfileImgUrlProps[] | undefined;
}
