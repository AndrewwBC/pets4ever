import { VscComment, VscHeart, VscHeartFilled, VscSend } from "react-icons/vsc";
import POST_API from "../../../../../../api/post/POST_API";
import { useUser } from "../../../../../../context/UserProvider";
import { useEffect, useState } from "react";
import { usePosts } from "../../../../../../context/PostsProvider";

function IconsLikeCommentSharePostModal({
  postId,
  userLikedThisPost,
  getPost,
}: any) {
  const [likeLoading, setLikeLoading] = useState(false);
  const [userLiked, setUserLiked] = useState(userLikedThisPost);

  const { user } = useUser();
  const { posts, setPosts } = usePosts();

  function handleCommentFocus() {
    document.getElementById("inputComment")?.focus();
  }

  useEffect(() => {}, [userLikedThisPost]);

  async function handlePostLikePutModal(postId: string) {
    const data = {
      username: user!.username,
      postId,
    };

    if (!likeLoading) {
      try {
        setLikeLoading(true);
        const newPost = await POST_API.patchPostLike(data);

        if (newPost) {
          setUserLiked(newPost.userLikedThisPost);
          setPosts(
            posts?.map((post) =>
              post.postId !== newPost.postId ? post : newPost
            )
          );
        }
      } catch (err) {
      } finally {
        setLikeLoading(false);
        getPost();
      }
    }
  }

  return (
    <div className="icons">
      {!userLiked ? (
        <VscHeart
          onClick={() => handlePostLikePutModal(postId)}
          style={{ cursor: "pointer" }}
          size={26}
        />
      ) : (
        <VscHeartFilled
          onClick={() => handlePostLikePutModal(postId)}
          style={{ cursor: "pointer" }}
          size={26}
          color="red"
        />
      )}
      <VscComment
        onClick={() => handleCommentFocus()}
        style={{ cursor: "pointer" }}
        size={26}
      />
      <VscSend style={{ cursor: "pointer" }} size={26} />
    </div>
  );
}

export default IconsLikeCommentSharePostModal;
