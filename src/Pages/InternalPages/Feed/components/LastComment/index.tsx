import { Comment } from "../../../UserProfile/components/ProfileFeed/types";
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
          <p>
            <Link to={`/profile/${lastComment.userId}`}>
              {lastComment?.username}
            </Link>
            <span> comentou</span>
          </p>
          <p>{lastComment?.comment}</p>
        </div>
      </Container>
    );
}
