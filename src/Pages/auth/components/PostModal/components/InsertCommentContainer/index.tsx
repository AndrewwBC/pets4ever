import { ChangeEvent, useState } from "react";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";
import { useUser } from "../../../../../../context/UserProvider";
import COMMENT_API from "../../../../../../api/comment/COMMENT_API";

interface InsertCommentPostModalProps {
  retrieveNewComments: () => any;
  postId: string;
}

function InsertCommentPostModal({
  retrieveNewComments,
  postId,
}: InsertCommentPostModalProps) {
  const [comment, setComment] = useState("");
  const { user } = useUser();

  async function handleSendComment() {
    const userId = user?.userId;

    const data = {
      userId: userId,
      postId: postId,
      comment,
    };

    try {
      await COMMENT_API.comment(data);
      retrieveNewComments();
    } catch (error) {
    } finally {
      setComment("");
    }
  }

  return (
    <div className="insertCommentContainer">
      <Input
        id="inputComment"
        placeholder="Insira um comentário..."
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          setComment(target.value)
        }
        value={comment}
      />
      <VscSend
        onClick={handleSendComment}
        style={{ cursor: "pointer" }}
        size={26}
      />
    </div>
  );
}

export default InsertCommentPostModal;
