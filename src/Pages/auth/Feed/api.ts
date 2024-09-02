import API from "../../../api/axiosInstance";

export async function getPosts() {
  const userId = localStorage.getItem("userId");
  console.log("Oi");
  try {
    const r = await API.get(`/post/${userId}`);
    const response = await r.data;

    return response;
  } catch (err) {
    console.log(err);
  }
}
