import { Container } from "./styles";
import { PostArrayProps } from "./types";

function ProfileFeed({ posts }: PostArrayProps) {
  function handlePostModal(postId: string) {
    return postId;
  }
  if (posts)
    return (
      <Container>
        <div className="profileFeedContent">
          {posts.map((item, index) => (
            <div
              className="eachImg"
              key={index}
              onClick={() => handlePostModal(item.postId)}
            >
              <img
                className="feedPhoto"
                src={`https://pets4ever.s3.us-east-2.amazonaws.com/${item.imageUrl}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </Container>
    );
}

export default ProfileFeed;
