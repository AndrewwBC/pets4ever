import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { PostProps } from "../types/post";
import API from "../api/axiosInstance";

interface PostContextProps {
  posts: PostProps[] | undefined;
  setPosts: Dispatch<SetStateAction<PostProps[] | undefined>>;
  getPosts: (username: string) => Promise<PostProps[] | undefined>;
  isLoading: boolean;
}

const PostsContext = createContext<PostContextProps>({
  posts: undefined,
  setPosts: () => undefined,
  getPosts: async () => undefined,
  isLoading: false,
});

function PostsProvider({ children }: any) {
  const [posts, setPosts] = useState<PostProps[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function getPosts(username: string) {
    setIsLoading(true);
    try {
      const r = await API.get(`/post/${username}`);
      const response = await r.data;

      setPosts(response);
      return response;
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  const contextValue = useMemo(
    () => ({
      posts,
      setPosts,
      getPosts,
      isLoading,
    }),
    [posts]
  );

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;

export function usePosts() {
  return useContext(PostsContext);
}
