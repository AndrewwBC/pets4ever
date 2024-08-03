import { StoriesContainer } from "./styles";
import StoriesModal from "../../../components/StoriesModal";
import { useState } from "react";

const Stories = () => {
  const [storiesModal, setStoriesModal] = useState(false);

  const stories = [
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1565194481104-39d1ee1b8bcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@andrew",
    },
  ];

  function handleStoriesClick() {
    setStoriesModal(!storiesModal);
  }
  return (
    <StoriesContainer>
      {storiesModal && <StoriesModal />}

      <header>
        <span>Stories</span>
      </header>

      <div className="storiesContent">
        {stories.map((item) => (
          <div
            onClick={() => handleStoriesClick}
            key={Math.random()}
            className="eachStorie"
          >
            <img src={item.img} alt="" />
            <span>{item.user}</span>
          </div>
        ))}
      </div>
    </StoriesContainer>
  );
};

export default Stories;
