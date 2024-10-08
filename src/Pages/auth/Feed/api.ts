import API from "../../../api/axiosInstance";

export async function getPosts(username: string) {
  try {
    const r = await API.get(`/post/${username}`);
    const response = await r.data;
    console.log(response);
    return response;
  } catch (err) {}
}
