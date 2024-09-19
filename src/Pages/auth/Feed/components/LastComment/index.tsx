import { Comment } from "../../../../../types/comment";
import { Container } from "./styles";
import { Link } from "react-router-dom";

interface LastCommentProps {
  comments: Comment[];
}

export default function LastComment({ comments }: LastCommentProps) {
  const lastComment =
    comments.length > 0 ? comments[comments.length - 1] : comments[0];

  if (lastComment)
    return (
      <Container>
        <div className="content">
          <Link to={`/${lastComment.username}`}>
            <p>{lastComment?.username}</p>
          </Link>
          <p>comentou: {lastComment?.comment}</p>
        </div>
      </Container>
    );
}
