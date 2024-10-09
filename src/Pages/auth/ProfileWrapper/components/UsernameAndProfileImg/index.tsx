import { useState } from "react";
import PostProfilePicture from "../PostProfilePicture";
import { Content } from "./styles";
import { useUser } from "../../../../../context/UserProvider";

interface UsernameAndProfileImgProps {
  profileImgUrl: string;
  username: string;
}

function UsernameAndProfileImg({
  profileImgUrl,
  username,
}: UsernameAndProfileImgProps) {
  const { user } = useUser();

  const [postProfilePictureModal, setPostProfilePictureModal] =
    useState<boolean>(false);

  function updateProfileImg() {
    if (user?.username === username) return;
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
      <div>
        <img src={src} alt="sua foto de perfil" onClick={updateProfileImg} />
      </div>
      <span className="username">{username}</span>
    </Content>
  );
}

export default UsernameAndProfileImg;
