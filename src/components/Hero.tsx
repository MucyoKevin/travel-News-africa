"use client";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import Card, { WideCard } from "./Card";
import { FirstCard } from "./Card";
import { getPostsbyTag, getPaginatedPosts } from "app/graphql/queries";
import { Post } from "@/types";
import Button from "./Button";
import Loading from "./Loading";
import usePosts from "@/hooks/usePosts";
import usePostsByTag from "@/hooks/usePostsByTag";

const Hero = () => {
  const { posts, loading: loadingPosts } = usePosts();
  const { posts: bigStories, loading: loadingBigStories } =
    usePostsByTag("big-story");
  console.log("🚀 ~ file: Hero.tsx:17 ~ Hero ~ bigStories:", bigStories);
  const { posts: topStories, loading: loadingTopStories } =
    usePostsByTag("top-story");

  const [bigStoryEnglish, setbigStoryEnglish] = useState<Post>();
  const [bigStoryFrench, setbigStoryFrench] = useState<Post>();
  const [bigStoryArabic, setbigStoryArabic] = useState<Post>();
  const [offset, setOffset] = useState(1);
  const [nextPosts, setNextPosts] = useState<Post[]>([]);
  const [items, setItems] = useState<JSX.Element[]>();
  const [loading, setLoading] = useState(false);

  const fetchByTag = (tag: string) => {
    return getPostsbyTag(tag);
  };

  const onClick = () => {
    setLoading(true);
    getPaginatedPosts(offset)
      .then((data) => {
        setLoading(false);
        setNextPosts((curr) => [...curr, ...data]);
        setOffset((off) => off + 6);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const findPostByLanguage = (posts: any[], language: string) => {
    const foundPost = posts.find((post) => {
      let result = false;
      post?.node?.tags?.nodes?.forEach((tag: any) => {
        if (tag.name === language) {
          result = true;
        }
      });
      return result;
    });

    return foundPost;
  };

  useEffect(() => {
    setItems(
      // @ts-ignore
      nextPosts.map(({ node: post }) => {
        return (
          <WideCard
            date={post?.date || ""}
            key={post.slug || ""}
            href={post.slug || ""}
            title={post?.title || ""}
            image={
              post?.featuredImage && {
                src: post?.featuredImage?.node?.sourceUrl,
                alt: "something",
              }
            }
          >
            {post.excerpt && parse(post.excerpt)}
          </WideCard>
        );
      })
    );
  }, [nextPosts]);

  useEffect(() => {
    if (bigStories.length > 0) {
      const { node: englishStory } = findPostByLanguage(bigStories, "English");
      setbigStoryEnglish(englishStory);
      const { node: frenchStory } = findPostByLanguage(bigStories, "French");
      setbigStoryFrench(frenchStory);
      const { node: arabicStory } = findPostByLanguage(bigStories, "Arabic");
      setbigStoryArabic(arabicStory);
    }
  }, [bigStories]);

  if (loadingBigStories || loadingTopStories) {
    return (
      <div className="flex w-full h-96">
        <Loading className="mx-auto" />
      </div>
    );
  }

  return (
    <section>
      <div className="border-b-2 my-5">
        <div className="flex flex-col sm:flex-row justify-center md:divide-x-4 md:divide-slate-600 my-5">
          {bigStoryEnglish && (
            <FirstCard
              href={`${bigStoryEnglish?.slug || ""}`}
              title={bigStoryEnglish?.title || ""}
              image={{
                src: bigStoryEnglish?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryEnglish.excerpt, {
                replace: (node) => {
                  // @ts-ignore
                  if (node && node.data) {
                    // @ts-ignore
                    return <span>{node.data.substring(0, 150)}</span>;
                  }
                },
              })}
            </FirstCard>
          )}

          {bigStoryFrench && (
            <FirstCard
              href={`/${bigStoryFrench?.slug || ""}`}
              title={bigStoryFrench?.title || ""}
              image={{
                src: bigStoryFrench?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryFrench.excerpt, {
                replace: (node) => {
                  // @ts-ignore
                  if (node && node.data) {
                    // @ts-ignore
                    return <span>{node.data.substring(0, 150)}</span>;
                  }
                },
              })}
            </FirstCard>
          )}

          {bigStoryArabic && (
            <FirstCard
              href={`/${bigStoryArabic?.slug || ""}`}
              title={bigStoryArabic?.title || ""}
              image={{
                src: bigStoryArabic?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryArabic.excerpt, {
                replace: (node) => {
                  // @ts-ignore
                  if (node && node.data) {
                    // @ts-ignore
                    return <span>{node.data.substring(0, 150)}</span>;
                  }
                },
              })}
            </FirstCard>
          )}
        </div>
      </div>

      <section>
        <div className="w-full px-28 ">
          <h3 className=" uppercase px-2">Top stories</h3>
        </div>
        <div className="sm:px-28 sm:mx-auto flex flex-col sm:flex-row justify-between divide-x-2 my-5 border-b-2   ">
          {topStories &&
            // @ts-ignore
            topStories.slice(0, 3).map(({ node: topStory }) => (
              <Card
                key={topStory.slug || ""}
                href={topStory.slug || ""}
                title={topStory?.title || ""}
                image={{
                  src: topStory?.featuredImage?.node?.sourceUrl || "",
                  alt: "Something",
                }}
              >
                {parse(topStory.excerpt)}
              </Card>
            ))}
        </div>
      </section>

      <section className="flex flex-col border-b-2 py-5">
        {/* <div className="w-full px-28 ">
          <h3 className=" uppercase px-2">Sports</h3>
        </div> */}
        <div className="sm:px-28 sm:mx-auto flex flex-col sm:flex-row  sm:space-x-4 sm:divide-x-2 ">
          {posts &&
            // @ts-ignore
            posts.slice(0, 3).map(({ node: sports }) => (
              <Card
                href={sports.slug || ""}
                key={sports.slug || ""}
                title={sports?.title || ""}
                image={{
                  src: sports?.featuredImage?.node?.sourceUrl || "",
                  alt: "Something",
                }}
              >
                {parse(sports.excerpt)}
              </Card>
            ))}
        </div>
      </section>

      <section>
        <div className="w-full px-28 ">
          <h3 className="uppercase px-2 my-4">Latest</h3>
        </div>
        <div className="sm:px-28 sm:mx-auto flex flex-col">
          {posts &&
            // @ts-ignore
            posts.slice(5, 10).map(({ node: news }) => (
              <WideCard
                date={news?.date || ""}
                key={news.slug || ""}
                href={news.slug || ""}
                title={news?.title || ""}
                image={
                  news?.featuredImage && {
                    src: news?.featuredImage?.node?.sourceUrl,
                    alt: "something",
                  }
                }
              >
                {parse(news.excerpt)}
              </WideCard>
            ))}
          {items}

          {loading ? (
            <Loading />
          ) : (
            <Button onClick={onClick} className="mx-auto mt-8">
              Show more
            </Button>
          )}
        </div>
      </section>
    </section>
  );
};

export default Hero;
