import { useState } from "react";
import { Container, HeaderAndPhoto } from "./styles";

import { VscHeart, VscComment, VscSend } from "react-icons/vsc";

import PostModal from "../components/PostModal";
import FeedFeatures from "./components/FeedFeatures";

export const Feed = () => {
  const data = [
    {
      url: "https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
    {
      url: "https://images.unsplash.com/photo-1616781296073-65d3f087de41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Andrew",
      description: "É um bom garoto, ou não é?!?",
      created_at: "02/05/2023",
    },
  ];
  const [feedPostModal, setFeedPostModal] = useState(false);

  return (
    <Container>
      {feedPostModal && <PostModal />}

      <HeaderAndPhoto>
        <div className="header">
          <h1>Feeds</h1>

          <div className="menuHeader">
            <p>Recentes</p>
            <p>Amigos</p>
            <p>Popular</p>
          </div>
        </div>

        <div className="imagesContainer">
          {data.map(({ url, userName, description, created_at }) => {
            return (
              <div onClick={() => setFeedPostModal(true)}>
                <img className="feedPhoto" src={url} alt="" />
                <div className="userInfo">
                  <div className="iconsContainerAndCreatedAt">
                    <div className="icons">
                      <VscHeart style={{ cursor: "pointer" }} size={26} />
                      <VscComment style={{ cursor: "pointer" }} size={26} />
                      <VscSend style={{ cursor: "pointer" }} size={26} />
                    </div>

                    <div className="createdAt">
                      <small>{created_at}</small>
                    </div>
                  </div>

                  <div className="nameAndDescription">
                    <p>@{userName.toLowerCase()}</p>
                    <small>{description}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </HeaderAndPhoto>

      <FeedFeatures />
    </Container>
  );
};

export default Feed;
