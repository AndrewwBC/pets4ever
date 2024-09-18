import { VscHeart, VscComment, VscSend, VscHeartFilled } from "react-icons/vsc";

export default function IconsToLikeCommentAndShare({
  userLikedThisPost,
  postId,
  handlePostLikePut,
  handlePostModal,
}: any) {
  return (
    <div className="icons">
      {!userLikedThisPost ? (
        <VscHeart
          onClick={() => handlePostLikePut(postId)}
          style={{ cursor: "pointer" }}
          size={26}
        />
      ) : (
        <VscHeartFilled
          onClick={() => handlePostLikePut(postId)}
          style={{ cursor: "pointer" }}
          size={26}
          color="red"
        />
      )}
      <VscComment
        onClick={() => handlePostModal(postId)}
        style={{ cursor: "pointer" }}
        size={26}
      />
      <VscSend style={{ cursor: "pointer" }} size={26} />
    </div>
  );
}
