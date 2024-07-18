import axios from "axios";

export async function uploadFile(file: any, postDescription: string) {
  const formData = new FormData();
  const now = new Date();

  const token = localStorage.getItem("token");

  const createdAt = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  formData.append("file", file);
  formData.append("description", postDescription);
  formData.append("creationDate", createdAt);
  formData.append("isStorie", "Storie");

  try {
    const requestPy = await axios({
      url: "http://127.0.0.1:5000/getPredction",
      method: "POST",
      data: formData,
    });

    const previsao = await requestPy.data.previsao;
    alert(previsao);
    return previsao;
  } catch (err) {
    console.log(err);
  }

  try {
    const r = await axios({
      url: "http://localhost:8080/post/create",
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await r.data;

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
