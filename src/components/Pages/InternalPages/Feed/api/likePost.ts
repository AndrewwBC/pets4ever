import axios from "axios";
import { json } from "react-router-dom";

export async function updateLikeInPost(postId: string, setLikeLoading: any) {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("postId", postId);

  try {
    setLikeLoading(true);
    const r = await axios({
      url: `${import.meta.env.VITE_API}/post/postlike`,
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await r.data;

    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  } finally {
    setLikeLoading(false);
  }
}
