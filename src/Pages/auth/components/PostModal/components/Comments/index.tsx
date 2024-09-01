import { Comment } from "../../../../UserProfile/components/ProfileFeed/types";

interface CommentsPostModalProps {
  comments?: Comment[];
}

function CommentsPostModal({ comments }: CommentsPostModalProps) {
  if (!comments)
    return (
      <>
        <div>
          <p>Sem comentários.</p>
        </div>
      </>
    );

  return (
    <div className="commentContainer">
      {comments?.map(({ comment, userId, username, profileImageUrl }) => (
        <div className="comment" key={userId + Math.random()}>
          <div className="usernameAndImage">
            <img
              src={`https://pets4ever.s3.us-east-2.amazonaws.com/${profileImageUrl}`}
              height={28}
              width={28}
              alt=""
            />
            <p>{username}</p>
          </div>

          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsPostModal;
