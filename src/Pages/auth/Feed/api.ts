import API from "../../../api/axiosInstance";

export async function getPosts(username: string) {
  try {
    const r = await API.get(`/post/${username}`);
    const response = await r.data;

    return response;
  } catch (err) {}
}
