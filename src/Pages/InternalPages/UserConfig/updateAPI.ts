import axios from "axios";

export async function UpdateAPI(userData: any, userId: string) {
  const token = localStorage.getItem("token");

  try {
    const request = await axios({
      url: `${import.meta.env.VITE_API}/api/v1/user/update/${userId}`,
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
  }
}
