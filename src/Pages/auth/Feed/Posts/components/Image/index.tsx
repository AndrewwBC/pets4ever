import { ImageContainer } from "./styles";

interface ImageProps {
  postUrl: string;
  onClick: () => void;
}

function Image({ postUrl, onClick }: ImageProps) {
  const mediaUrl = `https://pets4ever.s3.us-east-2.amazonaws.com/${postUrl}`;

  return (
    <ImageContainer onClick={onClick}>
      <img src={mediaUrl} alt="Post" loading="lazy" />
    </ImageContainer>
  );
}

export default Image;
