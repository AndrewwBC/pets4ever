import { ChangeEvent, useContext, useState } from "react";

import axios, { AxiosError } from "axios";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";
import { GlobalContext } from "../../../../../../context/GlobalStorage";

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
  const { data } = useContext(GlobalContext);

  async function handleSendComment() {
    const token = localStorage.getItem("token");

    commentData.userId = data.userId;
    commentData.postId = postId;

    try {
      const request = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/comment/`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
