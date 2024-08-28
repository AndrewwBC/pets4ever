import axios, { AxiosError } from "axios";

export async function getPosts() {
  const token = localStorage.getItem("token");

  try {
    const r = await axios({
      url: `${import.meta.env.VITE_API}/api/v1/post/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await r.data;

    return response;
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError) {
      if (err.response?.status == 401) {
        localStorage.clear();
        alert(err.response.data);

        window.location.pathname = "/";
      }
    }
  }
}
