interface VideoOrImageProps {
  postUrl: string;
  onClick: () => void;
}

function VideoOrImage({ postUrl, onClick }: VideoOrImageProps) {
  const isVideo = postUrl.endsWith(".mp4");
  const mediaUrl = `https://pets4ever.s3.us-east-2.amazonaws.com/${postUrl}`;

  return (
    <div onClick={onClick} className="imageContainer">
      {isVideo ? (
        <video controls preload="metadata" playsInline>
          <source src={mediaUrl} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      ) : (
        <img src={mediaUrl} alt="Post" loading="lazy" />
      )}
    </div>
  );
}

export default VideoOrImage;
