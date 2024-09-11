import { useEffect } from "react";
import { useUser } from "../../../context/UserProvider";

function InitialLoader() {
  const { retrieveUser } = useUser();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await retrieveUser();
  }

  return null;
}

export default InitialLoader;