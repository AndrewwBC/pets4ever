import axios from "axios";

export async function DeleteAPI(setIsLoading: any) {
  const token = localStorage.getItem("token");

  try {
    setIsLoading(true);

    const request = await axios({
      url: "import.meta.env.import.meta.env.VITE_API/auth/delete",
      method: "delete",
      headers: {
        Authorization: "Bearer" + token,
      },
    });

    console.log(request, token);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
}
