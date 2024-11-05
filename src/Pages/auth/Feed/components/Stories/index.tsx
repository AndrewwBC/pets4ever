import {
  Container,
  CreateStatusContainer,
  SuccessStatusContainer,
} from "./styles";
import StoriesModal from "../../../modals/StoriesModal";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegPlusSquare } from "react-icons/fa";
import CreateStorieModal from "./CreateStorieModal";
import STORIE_API from "../../../../../api/storie/STORIE_API";
import { StoriesProps } from "../../../../../api/storie/types";
import { CreateStatusProps, StoriesModalProps } from "./types";

const Stories = () => {
  const [storiesModal, setStoriesModal] = useState<StoriesModalProps>({
    storie: undefined,
    modalState: false,
  });
  const [createModal, setCreateModal] = useState(false);
  const [stories, setStories] = useState<StoriesProps[]>([]);
  const [createStatus, setCreateStatus] = useState<CreateStatusProps>({
    isLoading: false,
    success: undefined,
  });

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    try {
      const response = await STORIE_API.index();
      if (response) setStories(response);
    } catch (err) {
      console.log(err);
    }
  }

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
      items: 6,
    },
    mini: {
      breakpoint: { max: 320, min: 0 },
      items: 4,
    },
  };

  return (
    <Container>
      {createModal && (
        <CreateStorieModal
          setModal={setCreateModal}
          setCreateStatus={setCreateStatus}
        />
      )}
      <header>
        <div>
          <span>Stories</span>
        </div>
        <div className="gradient"></div>
        <div onClick={() => setCreateModal(true)} className="new">
          <FaRegPlusSquare size={20} className="icon" />
          <p>Novo</p>
        </div>
      </header>

      {storiesModal.modalState && (
        <StoriesModal modal={storiesModal} setModal={setStoriesModal} />
      )}

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
            onClick={() =>
              setStoriesModal({
                storie: item,
                modalState: true,
              })
            }
            key={Math.random()}
            className="eachStorie"
          >
            <img
              src={
                item.profileImgUrl
                  ? `https://pets4ever.s3.us-east-2.amazonaws.com/${item.profileImgUrl}`
                  : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
              }
              alt=""
            />
            <span>
              {item.username.length > 8
                ? item.username.slice(0, 8).concat("...")
                : item.username}
            </span>
          </div>
        ))}
      </Carousel>
      {createStatus.isLoading && (
        <CreateStatusContainer>
          {true && (
            <div className="content">
              <p className="message">Estamos registrando o seu storie</p>
            </div>
          )}
        </CreateStatusContainer>
      )}
      {!createStatus.isLoading && createStatus.success && (
        <SuccessStatusContainer>
          {true && (
            <div className="content">
              <p className="message">Storie registrado!</p>
            </div>
          )}
        </SuccessStatusContainer>
      )}
    </Container>
  );
};

export default Stories;
