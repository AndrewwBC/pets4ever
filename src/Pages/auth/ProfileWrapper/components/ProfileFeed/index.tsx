import { FeedPostProps } from "../../../Feed/types";
import { Container, EachRow, ImageContainer } from "./styles";

interface ProfileFeedProps {
  posts: FeedPostProps[];
}

function ProfileFeed({ posts }: ProfileFeedProps) {
  function handlePostModal(postId: string) {
    return postId;
  }

  interface GroupOf3PostsProps {
    group: FeedPostProps[];
  }

  if (posts) {
    let aux = 0;
    let group: FeedPostProps[] = [];
    let groupsOf3posts: GroupOf3PostsProps[] = [];

    posts.forEach((post: any) => {
      group.push(post);

      aux++;
      if (aux === 3) {
        groupsOf3posts.push({ group: group });
        group = [];
        aux = 0;
      }
    });

    if (group.length > 0) {
      groupsOf3posts.push({ group: group });
    }

    return (
      <Container>
        <div className="profileFeedContent">
          {groupsOf3posts.map(({ group }) => (
            <EachRow>
              {group.map((post, index) => (
                <ImageContainer
                  className="imageContainer"
                  key={index}
                  onClick={() => handlePostModal(post.postId)}
                >
                  <img
                    className="feedPhoto"
                    src={`https://pets4ever.s3.us-east-2.amazonaws.com/${post.imageUrl}`}
                    alt=""
                  />
                </ImageContainer>
              ))}
            </EachRow>
          ))}
        </div>
      </Container>
    );
  }
}

export default ProfileFeed;
