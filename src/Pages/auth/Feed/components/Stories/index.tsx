import { Container } from "./styles";
import StoriesModal from "../../../modals/StoriesModal";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegPlusSquare } from "react-icons/fa";
import CreateStorieModal from "./CreateStorieModal";

const Stories = () => {
  const [storiesModal, setStoriesModal] = useState(false);
  const [createModal, setCreateModal] = useState(true);

  const stories = [
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
    {
      img: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      user: "@sasa",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function handleStoriesClick() {
    setStoriesModal(!storiesModal);
  }
  return (
    <Container>
      {createModal && <CreateStorieModal setModal={setCreateModal} />}
      <header>
        <div>
          <span>Stories</span>
        </div>
        <div className="gradient"></div>
        <div onClick={() => setCreateModal(true)} className="icon">
          <FaRegPlusSquare size={20} />
          <p>Novo</p>
        </div>
      </header>

      {storiesModal && <StoriesModal />}

      <Carousel
        centerMode={true}
        responsive={responsive}
        className="storiesContainer"
        containerClass="carousel-container"
        showDots={true}
        arrows={false}
      >
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
      </Carousel>
    </Container>
  );
};

export default Stories;
