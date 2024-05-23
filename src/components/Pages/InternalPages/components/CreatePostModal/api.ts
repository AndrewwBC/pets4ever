import axios from "axios";

export async function uploadFile(file: any, postDescription: string) {
  const formData = new FormData();
  const now = new Date();

  const token = localStorage.getItem("token");

  const createdAt = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  console.log(now.getDate());

  formData.append("file", file);
  formData.append("description", postDescription);
  formData.append("creationDate", createdAt);
  formData.append("isStorie", "Storie");

  try {
    const r = await axios({
      url: "http://localhost:8080/post/create",
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const request = await fetch("http://localhost:8080/post/create", {
      method: "POST",
      body: formData,
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
