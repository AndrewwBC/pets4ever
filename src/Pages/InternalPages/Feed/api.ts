import axios, { AxiosError } from "axios";

export async function getPosts() {
  const token = localStorage.getItem("token");

  try {
    const r = await axios({
      url: `${import.meta.env.VITE_API}/post/show`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await r.data;

    return response;
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError) {
      const { data, status } = err.response;
      if (status == "401") {
        localStorage.clear();
        alert(data);

        window.location.pathname = "/";
      }
    }
  }
}
