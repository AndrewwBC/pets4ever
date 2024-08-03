import { ChangeEvent, useState } from "react";

import axios, { AxiosError } from "axios";

import { VscSend } from "react-icons/vsc";
import { Input } from "../../../../../../components/input";

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
  });

  async function handleSendComment() {
    const token = localStorage.getItem("token");

    try {
      const request = await axios({
        url: `${import.meta.env.VITE_API}/comment/store/${postId}`,
        method: "post",
        data: commentData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
