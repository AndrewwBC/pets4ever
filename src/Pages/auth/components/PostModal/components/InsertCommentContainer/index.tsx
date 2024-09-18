import { ChangeEvent, useState } from "react";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";
import { useUser } from "../../../../../../context/UserProvider";
import COMMENT_API from "../../../../../../api/comment/COMMENT_API";
import { SendCommentButton } from "./styles";
import FormGroup from "../../../../../../components/FormGroup";

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
  const [commentError, setCommentError] = useState("");

  async function handleSendComment() {
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
      retrieveNewComments();
    } catch (error) {
    } finally {
      setComment("");
    }
  }

  return (
    <div className="insertCommentContainer">
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

      <SendCommentButton>
        <VscSend
          onClick={handleSendComment}
          style={{ cursor: "pointer" }}
          size={26}
        />
      </SendCommentButton>
    </div>
  );
}

export default InsertCommentPostModal;
