import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

import useCache from "./useCache";
import { getPostsbyTag } from "../../app/graphql/queries";
import { Post } from "@/types";

const usePostByTag = (tag: string) => {
  const { getCache, setCache } = useCache();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (getCache(`posts-${tag}`)) {
      setPosts(getCache(`posts-${tag}`));
    } else {
      getAllPostsByTag();
    }
  }, []);

  const getAllPostsByTag = () => {
    setLoading(true);
    getPostsbyTag(tag)
      .then((allPosts) => {
        setPosts(allPosts);
        setCache(`posts-${tag}`, allPosts);
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
    getAllPostsByTag,
  };
};

// @ts-ignore
export default usePostByTag;
