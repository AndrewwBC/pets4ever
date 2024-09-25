import { Container, Content } from "./styles";
import StoriesModal from "../../../components/StoriesModal";
import { useState } from "react";

const Stories = () => {
  const [storiesModal, setStoriesModal] = useState(false);

  const stories = [
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
  ];

  function handleStoriesClick() {
    setStoriesModal(!storiesModal);
  }
  return (
    <Container>
      <header>
        <span>Stories</span>
      </header>
      <Content>
        {storiesModal && <StoriesModal />}

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
      </Content>
    </Container>
  );
};

export default Stories;
