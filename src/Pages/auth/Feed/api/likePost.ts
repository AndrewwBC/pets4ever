import axios from "axios";

export async function updateLikeInPost(
  userId: string,
  postId: string,
  setLikeLoading: any
) {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("postId", postId);

  try {
    setLikeLoading(true);
    const r = await axios({
      url: `${import.meta.env.VITE_API}/api/v1/post/postlike/${userId}`,
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await r.data;

    return response;
  } catch (err) {
  } finally {
    setLikeLoading(false);
  }
}
