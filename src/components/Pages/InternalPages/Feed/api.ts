import axios from "axios";

export async function getPosts() {
  const token = localStorage.getItem("token");

  try {
    const r = await axios({
      url: "http://localhost:8080/post/show",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await r.data;

    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
