// @ts-nocheck
import { useState } from "react";

const useCache = () => {
  const [cache, set] = useState({});
  //   console.log(cache)
  const getCache = (key: string) => {
    // console.log('fetching', key)
    return cache[key];
  };
  const setCache = (key, value) => {
    // console.log('caching', key, value)
    return set((data) => Object.assign({}, data, { [key]: value }));
  };

  return { getCache, setCache };
};

export default useCache;
