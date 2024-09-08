import { ChangeEvent, useState } from "react";

import axios, { AxiosError } from "axios";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";
import { useUser } from "../../../../../../context/UserProvider";

interface InsertCommentPostModalProps {
  retrieveNewComments: () => any;
  postId: string;
}

function InsertCommentPostModal({
  retrieveNewComments,
  postId,
}: InsertCommentPostModalProps) {
  const [commentData, setCommentData] = useState({
    comment: "",
    postId: "",
    userId: "",
  });
  const { user } = useUser();
  async function handleSendComment() {
    commentData.userId = user.userId;
    commentData.postId = postId;

    try {
      const request = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/comment/`,
        commentData
      );

      if (request) retrieveNewComments();

      console.log(request);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  }

  return (
    <div className="insertCommentContainer">
      <Input
        id="inputComment"
        placeholder="Insira um comentário..."
        onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
          setCommentData({
            comment: target.value,
            postId: "",
            userId: "",
          })
        }
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
