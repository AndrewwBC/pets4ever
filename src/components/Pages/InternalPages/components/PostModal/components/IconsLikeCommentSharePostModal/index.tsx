import { VscComment, VscHeart, VscSend } from "react-icons/vsc"

function IconsLikeCommentSharePostModal() {

  function handleCommentFocus() {
    const input = document.getElementById("inputComment");

    input?.focus();
  }


    return (
        <div className="icons">
        <VscHeart style={{ cursor: "pointer" }} size={26} />
        <VscComment
          onClick={() => handleCommentFocus()}
          style={{ cursor: "pointer" }}
          size={26}
        />
        <VscSend style={{ cursor: "pointer" }} size={26} />
      </div>
    )
}

export default IconsLikeCommentSharePostModal