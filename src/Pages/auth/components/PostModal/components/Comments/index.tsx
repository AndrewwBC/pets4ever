import { Comment } from "../../../../../../types/comment";

interface CommentsPostModalProps {
  comments?: Comment[];
}

function CommentsPostModal({ comments }: CommentsPostModalProps) {
  if (comments?.length! < 1)
    return (
      <>
        <div>
          <p>Sem comentários.</p>
        </div>
      </>
    );

  if (comments)
    return (
      <div className="commentContainer">
        {comments?.map(({ comment, userId, username, profileImgUrl }) => (
          <div className="comment" key={userId + Math.random()}>
            <div className="usernameAndImage">
              <img
                src={
                  profileImgUrl
                    ? `https://pets4ever.s3.us-east-2.amazonaws.com/${profileImgUrl}`
                    : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                }
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
