import axios from "axios";

export async function UpdateAPI(userData: any, setIsLoading: any) {
  const token = localStorage.getItem("token");

  try {
    setIsLoading(true);

    const request = await axios({
      url: "import.meta.env.import.meta.env.VITE_API/auth/update",
      method: "put",
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
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
