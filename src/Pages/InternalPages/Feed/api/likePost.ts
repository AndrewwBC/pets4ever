import axios, { AxiosError } from "axios";

export async function updateLikeInPost(postId: string, setLikeLoading: any) {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("postId", postId);

  try {
    setLikeLoading(true);
    const r = await axios({
      url: `${import.meta.env.VITE_API}/api/v1/post/postlike`,
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
    if (err instanceof AxiosError) console.log(err.message);
  } finally {
    setLikeLoading(false);
  }
}
