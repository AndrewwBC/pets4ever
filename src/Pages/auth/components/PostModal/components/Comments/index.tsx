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
}

function CommentsPostModal({ comments }: CommentsPostModalProps) {
  const [deleteOrDenounceModal, setDeleteOrDenounceModal] = useState(false);

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
        {comments?.map(
          ({
            commentId,
            comment,
            creationDate,
            userId,
            username,
            profileImgUrl,
          }) => (
            <EachComment>
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
                    <Link to={username}>
                      <p>{username}</p>
                    </Link>
                  </div>
                  <div className="options">
                    <p className="timeSince">
                      {timeSinceComment(creationDate)}
                    </p>
                    <HiOutlineDotsHorizontal
                      style={{ cursor: "pointer" }}
                      onClick={() => setDeleteOrDenounceModal(true)}
                      size={20}
                    />
                    {deleteOrDenounceModal && (
                      <DeleteOrDenounce
                        username={username}
                        commentId={commentId}
                        modal={deleteOrDenounceModal}
                        setModal={setDeleteOrDenounceModal}
                      />
                    )}
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
