import axios from "axios";

export async function DeleteAPI() {
  const token = localStorage.getItem("token");

  try {
    const request = await axios({
      url: `${
        import.meta.env.VITE_API
      }/api/v1/user/delete/47ca916d-79bc-4d5e-bc3b-88cde141d0e0`,
      method: "delete",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log(request, token);
  } catch (err) {
    console.log(err);
  }
}
