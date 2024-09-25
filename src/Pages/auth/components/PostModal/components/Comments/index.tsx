import { useEffect, useRef } from "react";
import { Comment } from "../../../../../../types/comment";
import { Container } from "./styles";

interface CommentsPostModalProps {
  comments?: Comment[];
}

function CommentsPostModal({ comments }: CommentsPostModalProps) {
  const container: {
    current: HTMLDivElement | null;
  } = useRef(null);

  useEffect(() => {
    scrollDown();
  }, [comments]);

  function scrollDown() {
    if (container.current)
      container.current.scrollTop = container.current.scrollHeight;
  }

  if (comments)
    return (
      <Container ref={container}>
        {comments?.map(({ comment, userId, username, profileImgUrl }) => (
          <div className="comment" key={userId + Math.random()}>
            <div className="usernameAndImage">
              <img
                src={
                  profileImgUrl
                    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${profileImgUrl}`
                    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                }
                alt=""
              />
              <p>{username}</p>
            </div>

            <p>{comment}</p>
          </div>
        ))}
      </Container>
    );
}

export default CommentsPostModal;
