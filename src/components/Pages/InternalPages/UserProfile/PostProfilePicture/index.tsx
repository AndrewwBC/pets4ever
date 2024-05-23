import axios from "axios";
import { useState } from "react";

const PostProfilePicture = () => {
  const [file, setFile] = useState();

  const formData = new FormData();

  async function PostPicture() {
    const token = localStorage.getItem("token");
    formData.append("file", file);

    try {
      const request = await axios({
        url: "http://localhost:8080/auth/profileimg",
        data: formData,
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(request);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={PostPicture}>Mandar</button>
    </div>
  );
};

export default PostProfilePicture;
