import axios from "axios";

export async function uploadFile(
  file: any,
  postDescription: string,
  setIsLoading
) {
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
    setIsLoading({
      step: "Validating",
      isLoading: true,
    });
    const requestPy = await axios({
      url: "http://127.0.0.1:5000/getPredction",
      method: "POST",
      data: formData,
    });

    const previsao = await requestPy.data.previsao;
    console.log(previsao);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Passou pelo python");
    setIsLoading({
      step: "",
      isLoading: true,
    });
  }

  try {
    setIsLoading({
      step: "Posting",
      isLoading: true,
    });
    console.log("Entrou Java");

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
  } finally {
    console.log("Saiu Java");

    setIsLoading({
      step: "Posted",
      isLoading: true,
    });
  }
}
