import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import API from "../../../../api/axiosInstance";

export async function uploadFile(
  userId: string,
  file: File,
  postDescription: string,
  setIsLoading: Dispatch<
    SetStateAction<{
      step: string;
      isLoading: boolean;
    }>
  >
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
  formData.append("userId", userId);

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

    const r = await API.post(`/post`, formData);

    const response = r.data;
    setIsLoading({
      step: "Posted",
      isLoading: true,
    });
    console.log(response);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(err.response?.data);
    }
  } finally {
    setIsLoading({
      step: "",
      isLoading: false,
    });
  }
}
