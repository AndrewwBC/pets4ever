import { useEffect, useRef, useState } from "react";
import { Comment } from "../../../../../../types/comment";
import {
  Container,
  EachComment,
  UsernameAndOptions,
  CommentContent,
} from "./styles";

import { timeSinceComment } from "../../../../../../utils/timeSinceComment";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import DeleteOrDenounce from "./DeleteOrDenounce";
import { Link } from "react-router-dom";

interface CommentsPostModalProps {
  comments?: Comment[];
  getPost: () => Promise<any>;
}

function CommentsPostModal({ comments, getPost }: CommentsPostModalProps) {
  const [deleteOrDenounceModal, setDeleteOrDenounceModal] = useState({
    state: false,
    data: {
      username: "",
      commentId: "",
    },
  });

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
        {deleteOrDenounceModal.state && (
          <DeleteOrDenounce
            modal={deleteOrDenounceModal}
            setModal={setDeleteOrDenounceModal}
            getPost={getPost}
          />
        )}
        {comments?.map(
          ({
            comment,
            commentId,
            creationDate,
            userId,
            username,
            profileImgUrl,
          }) => (
            <EachComment key={Math.random()}>
              <div className="comment" key={userId + Math.random()}>
                <div className="image">
                  <img
                    src={
                      profileImgUrl
                        ? `https://pets4ever.s3.us-east-2.amazonaws.com/${profileImgUrl}`
                        : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                    }
                    alt=""
                  />
                </div>

                <UsernameAndOptions>
                  <div>
                    <Link className="username" to={username}>
                      <p>{username}</p>
                    </Link>
                  </div>
                  <div className="options">
                    <p className="timeSince">
                      {timeSinceComment(creationDate)}
                    </p>
                    <HiOutlineDotsHorizontal
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setDeleteOrDenounceModal({
                          state: true,
                          data: {
                            username,
                            commentId,
                          },
                        })
                      }
                      size={20}
                    />
                  </div>
                </UsernameAndOptions>

                <CommentContent>
                  <p>{comment}</p>
                </CommentContent>
              </div>
            </EachComment>
          )
        )}
      </Container>
    );
}

export default CommentsPostModal;
