import { Dispatch, SetStateAction } from "react";
import { UsernameAndProfileImgUrlProps } from "../../../../types/user";

export interface ListOfUserProps {
  title: string;
  modal: {
    modalState: boolean;
    data: UsernameAndProfileImgUrlProps[] | undefined;
  };
  setModal: Dispatch<
    SetStateAction<{
      title: string;
      modalState: boolean;
      data: UsernameAndProfileImgUrlProps[] | undefined;
    }>
  >;
}

export interface ListOfUserStateProps {
  title: string;
  modalState: boolean;
  data: UsernameAndProfileImgUrlProps[] | undefined;
}
