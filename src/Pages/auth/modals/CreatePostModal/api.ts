import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import API from "../../../../api/axiosInstance";

export async function uploadFile(
  userId: string,
  file: File,
  postDescription: string,
  isLoading: {
    step: string;
    isLoading: boolean;
  },
  setIsLoading: Dispatch<
    SetStateAction<{
      step: string;
      isLoading: boolean;
    }>
  >
) {
  const formData = new FormData();
  const now = new Date();

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
      url: "https://iapython-dccdb8299722.herokuapp.com/validate",
      method: "POST",
      data: formData,
    });

    const previsao = await requestPy.data.previsao;
    if (previsao === "Animal") {
      setIsLoading({
        step: "isAnimal",
        isLoading: true,
      });

      await post(setIsLoading, formData);
    }

    if (previsao === "Não é Animal") {
      setIsLoading({
        step: "isNotAnimal",
        isLoading: true,
      });
    }

    return previsao;
  } catch (err) {
  } finally {
    if (isLoading.step === "isNotAnimal") {
      return;
    }
  }
}

async function post(setIsLoading: any, formData: any) {
  try {
    setIsLoading({
      step: "Posting",
      isLoading: true,
    });

    const r = await API.post(`/post`, formData);

    const response = r.data;
    if (response)
      setIsLoading({
        step: "Posted",
        isLoading: true,
      });
  } catch (err) {
    if (err instanceof AxiosError) {
    }
  }
}
