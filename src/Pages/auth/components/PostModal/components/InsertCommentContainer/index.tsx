import { ChangeEvent, FormEvent, useState } from "react";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";
import { useUser } from "../../../../../../context/UserProvider";
import COMMENT_API from "../../../../../../api/comment/COMMENT_API";
import { SendCommentButton } from "./styles";
import FormGroup from "../../../../../../components/FormGroup";

interface InsertCommentPostModalProps {
  getPost: () => any;
  postId: string;
}

function InsertCommentPostModal({
  getPost,
  postId,
}: InsertCommentPostModalProps) {
  const [comment, setComment] = useState("");
  const { user } = useUser();
  const [commentError, setCommentError] = useState("");

  async function handleSendComment(e: FormEvent) {
    e.preventDefault();
    if (comment.length < 1) {
      setCommentError("O comentário não pode ser vázio.");
      return;
    }

    const userId = user?.userId;

    const data = {
      userId: userId,
      postId: postId,
      comment,
    };

    try {
      await COMMENT_API.comment(data);
      getPost();
    } catch (error) {
    } finally {
      setComment("");
    }
  }

  return (
    <form onSubmit={handleSendComment} className="insertCommentContainer">
      <FormGroup error={commentError}>
        <Input
          id="inputComment"
          placeholder="Insira um comentário..."
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            setCommentError("");
            setComment(target.value);
          }}
          value={comment}
        />
      </FormGroup>

      <SendCommentButton type="submit">
        <VscSend style={{ cursor: "pointer" }} size={26} />
      </SendCommentButton>
    </form>
  );
}

export default InsertCommentPostModal;
