import { useEffect, useState } from "react";

import { PostModalProps } from "./types";
import { createPortal } from "react-dom";
import { Content, Modal } from "./styles";
import CommentsPostModal from "./components/Comments";
import IconsLikeCommentSharePostModal from "./components/IconsLikeCommentSharePostModal";
import InsertCommentPostModal from "./components/InsertCommentContainer";
import { timeSince } from "../../../../utils/timeSince";
import POST_API from "../../../../api/post/POST_API";
import { useUser } from "../../../../context/UserProvider";
import QuantityOfLikes from "../../Feed/components/QuantityOfLikes";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import EditDescriptionModal from "../../Feed/Posts/components/EditDescriptionModal";
import { PostProps } from "../../../../types/post";
import PostOptionsModal from "../../Feed/Posts/components/PostOptionsModal";
import { RxDotsVertical } from "react-icons/rx";

const PostModal = ({ getPosts }: PostModalProps) => {
  const { user } = useUser();
  const [modalPostData, setModalPostData] = useState<PostProps | null>();
  const [modalPostOptions, setPostOptionsModal] = useState<{
    state: boolean;
    post: PostProps | undefined;
  }>({
    state: false,
    post: undefined,
  });

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!modalPostData) getData();

    return () => {
      setModalPostData(null);
    };
  }, []);

  async function getData() {
    await getPost();
  }

  async function getPost() {
    const data = {
      username: user?.username,
      postId: params.id,
    };

    try {
      const post = await POST_API.show(data);
      if (post) setModalPostData(post);
    } catch (err) {}
  }

  window.addEventListener("click", (e: any) => {
    if (e.target?.id === "container") {
      navigate(`/feed`);
    }
  });

  function editPostDescription() {
    setModalPostData(modalPostData);
  }

  if (modalPostData)
    return createPortal(
      <Modal id="container">
        {modalPostOptions.state && (
          <PostOptionsModal
            getPosts={getPosts}
            modal={modalPostOptions}
            setModal={setPostOptionsModal}
            editPostDescriptionFunction={editPostDescription}
          />
        )}

        {pathname.endsWith("/edit") && (
          <EditDescriptionModal
            postId={modalPostData.postId}
            getPost={getPost}
          />
        )}

        <Content>
          <div className="imageContainer">
            <img
              src={`https://pets4ever.s3.us-east-2.amazonaws.com/${modalPostData.imageUrl}`}
              alt=""
            />
          </div>

          <div className="postInfo">
            <div className="nameDescriptionAndDots">
              <div className="nameAndPostOptions">
                <Link to={`/${modalPostData.username}`}>
                  <p>@{modalPostData.username}</p>
                </Link>

                <RxDotsVertical
                  style={{ cursor: "pointer" }}
                  className="dots"
                  size={22}
                  onClick={() =>
                    setPostOptionsModal({
                      state: true,
                      post: modalPostData,
                    })
                  }
                />
              </div>

              <div className="description">
                <small>{modalPostData.description}</small>
              </div>
            </div>

            <CommentsPostModal
              getPost={getPost}
              comments={modalPostData.comments}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <IconsLikeCommentSharePostModal
                postId={modalPostData.postId}
                userLikedThisPost={modalPostData.userLikedThisPost}
                getPost={getPost}
              />

              <small>{timeSince(modalPostData.creationDate)}</small>
            </div>

            <QuantityOfLikes
              listOfLikes={modalPostData.listOfLikes}
              quantityOfLikes={modalPostData.quantityOfLikes}
              userLikedThisPost={modalPostData.userLikedThisPost}
            />

            <InsertCommentPostModal
              postId={modalPostData?.postId}
              getPost={getPost}
            />
          </div>
        </Content>
        <Outlet />
      </Modal>,
      document.getElementById("feedPostModal")!
    );
};

export default PostModal;
