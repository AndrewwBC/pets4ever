import { Container } from "./styles";
import { ProfileFeedProps } from "./types";

function ProfileFeed({ posts }: ProfileFeedProps) {
  function handlePostModal(postId: string) {
    return postId;
  }

  return (
    <Container>
      <div className="profileFeedContent">
        {posts?.map(({ imageUrl, postId }, index) => (
          <div key={index} onClick={() => handlePostModal(postId)}>
            <img
              className="feedPhoto"
              src={`https://pets4ever.s3.us-east-2.amazonaws.com/${imageUrl}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProfileFeed;
