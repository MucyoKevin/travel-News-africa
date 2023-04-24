import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

import useCache from "./useCache";
import { getPosts } from "../../app/graphql/queries";
import { Post } from "@/types";

const usePosts = () => {
  const { getCache, setCache } = useCache();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (getCache("posts")) {
      setPosts(getCache("posts"));
    } else {
      getAllPosts();
    }
  }, []);

  const getAllPosts = () => {
    setLoading(true);
    getPosts()
      .then((allPosts) => {
        setPosts(allPosts);
        setCache("posts", allPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return {
    loading,
    error,
    posts,
    getAllPosts,
  };
};

// @ts-ignore
export default singletonHook({ loading: true }, usePosts);
