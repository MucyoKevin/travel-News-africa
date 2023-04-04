"use client";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import Card, { WideCard } from "./Card";
import { FirstCard } from "./Card";
import { getPostsByCategory, getPostsbyTag } from "app/graphql/queries";

const Hero = () => {
  const [bigStories, setBigStories] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [sports, setSports] = useState([]);
  const [news, setNews] = useState([]);
  const [bigStoryEnglish, setbigStoryEnglish] = useState();
  const [bigStoryFrench, setbigStoryFrench] = useState();
  const [bigStoryArabic, setbigStoryArabic] = useState();

  const fetchByTag = (tag: string) => {
    return getPostsbyTag(tag);
  };

  const fetchByCategory = (category: string) => {
    return getPostsByCategory(category);
  };

  useEffect(() => {
    fetchByTag("big-story").then((res) => setBigStories(res));
    fetchByTag("top-story").then((res) => setTopStories(res));
    fetchByCategory("sports").then((res) => setSports(res));
    fetchByCategory("news").then((res) => setNews(res));
  }, []);

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
    if (bigStories.length > 0) {
      const { node: englishStory } = findPostByLanguage(bigStories, "English");
      setbigStoryEnglish(englishStory);
      const { node: frenchStory } = findPostByLanguage(bigStories, "French");
      setbigStoryFrench(frenchStory);
      const { node: arabicStory } = findPostByLanguage(bigStories, "Arabic");
      setbigStoryArabic(arabicStory);
    }
  }, [bigStories]);

  return (
    <section>
      <div className="border-b-2 my-5">
        <div className="flex flex-col sm:flex-row justify-center divide-x-4 divide-slate-600 my-5">
          {bigStoryEnglish && (
            <FirstCard
              href={`/travel/${bigStoryEnglish?.slug || ""}`}
              title={bigStoryEnglish?.title || ""}
              image={{
                src: bigStoryEnglish?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryEnglish.excerpt, {
                replace: (node) => {
                  if (node && node.data) {
                    return <span>{node.data.substring(0, 150)}</span>;
                  }
                },
              })}
            </FirstCard>
          )}

          {bigStoryFrench && (
            <FirstCard
              href={`/travel/${bigStoryFrench?.slug || ""}`}
              title={bigStoryFrench?.title || ""}
              image={{
                src: bigStoryFrench?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryFrench.excerpt, {
                replace: (node) => {
                  if (node && node.data) {
                    return <span>{node.data.substring(0, 150)}</span>;
                  }
                },
              })}
            </FirstCard>
          )}

          {bigStoryArabic && (
            <FirstCard
              href={`/travel/${bigStoryArabic?.slug || ""}`}
              title={bigStoryArabic?.title || ""}
              image={{
                src: bigStoryArabic?.featuredImage?.node?.sourceUrl || "",
                alt: "Something",
              }}
            >
              {parse(bigStoryArabic.excerpt, {
                replace: (node) => {
                  if (node && node.data) {
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
            topStories.slice(0, 3).map(({ node: topStory }) => (
              <Card
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
        <div className="w-full px-28 ">
          <h3 className=" uppercase px-2">Sports</h3>
        </div>
        <div className="sm:px-28 sm:mx-auto flex flex-col sm:flex-row  sm:space-x-4 sm:divide-x-2 ">
          {sports &&
            sports.slice(0, 3).map(({ node: sports }) => (
              <Card
                href={sports.slug || ""}
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
          <h3 className=" uppercase px-2">News</h3>
        </div>
        <div className="sm:px-28 sm:mx-auto flex flex-col">
          {news &&
            news.slice(0, 5).map(({ node: news }) => (
              <WideCard
                date={news?.date || ""}
                href={news.slug || ""}
                title={news?.title || ""}
                image={{
                  src: news?.featuredImage?.node?.sourceUrl || "",
                  alt: "something",
                }}
              >
                {parse(news.excerpt)}
              </WideCard>
            ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
