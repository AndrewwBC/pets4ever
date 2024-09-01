import API from "../../../api/axiosInstance";

export async function getPosts() {
  const userId = localStorage.getItem("userId");

  try {
    const r = await API.get(`/post/${userId}`);
    const response = await r.data;

    return response;
  } catch (err) {
    console.log(err);
  }
}
