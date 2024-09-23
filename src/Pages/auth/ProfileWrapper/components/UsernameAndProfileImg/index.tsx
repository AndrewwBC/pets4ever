import { useState } from "react";
import PostProfilePicture from "../PostProfilePicture";
import { Content } from "./styles";

interface UsernameAndProfileImgProps {
  profileImgUrl: string;
  username: string;
}

function UsernameAndProfileImg({
  profileImgUrl,
  username,
}: UsernameAndProfileImgProps) {
  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);

  function updateProfileImg() {
    setPostProfilePictureModal(!postProfilePictureModal);
  }

  const src = profileImgUrl
    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${profileImgUrl}`
    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg";

  return (
    <Content>
      {postProfilePictureModal && (
        <PostProfilePicture setModal={setPostProfilePictureModal} />
      )}
      <img src={src} alt="sua foto de perfil" onClick={updateProfileImg} />
      <span className="username">{username}</span>
    </Content>
  );
}

export default UsernameAndProfileImg;
