"use client"
import {
  GiftIcon,
  BookmarkIcon,
  ShareIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { useParams } from 'next/navigation';
import Link from "next/link";

import IconBtn from "@/components/IconButton";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { getSinglePost, getGenerateAllPostPages } from "app/graphql/queries";
import parse from "html-react-parser";
import Image from "next/image";
import Author from "@/components/AuthorCard";
import { WideCard } from "@/components/Card";
import { getPostsByCategory } from "app/graphql/queries";
import { useSearchParams } from "next/navigation";

const SocialMediaLinks = () => {
  return (
    <p className="[&>a]:text-blue-500 [&>a]:underline">
      <span className="font-bold italic">Follow Travel News Africa</span> on{" "}
      <Link target="_blank" href="https://instagram.com">
        Instagram
      </Link>
      ,{" "}
      <Link href="https://twitter.com/" target="_blank">
        Twitter
      </Link>{" "}
      and{" "}
      <Link target="_blank" href="#">
        Facebook
      </Link>{" "}
      . And{" "}
      <Link href="#">sign up for our weekly Travel Dispatch newsletter</Link> to
      receive expert tips on traveling smarter and inspiration for your next
      vacation. Dreaming up a future getaway or just armchair traveling? Check
      out our <Link href="#">52 Places to Go in 2023.</Link>
    </p>
  );
};

interface IExploreSuggestion {
  country: string;
  children: React.ReactNode;
}

const ExploreSuggestion = ({ country, children }: IExploreSuggestion) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <p className="font-bold grow-[1] min-w-max">{country} :</p>{" "}
      <span className="grow-[3]">{children}</span>
    </div>
  );
};

function SharingLinks() {
  return (
    <div className="flex flex-nowrap justify-around sm:justify-start">
      <IconBtn icon={GiftIcon}>Give this article</IconBtn>
      <IconBtn icon={BookmarkIcon} />
      <IconBtn icon={ShareIcon} />
      <IconBtn icon={ChatBubbleOvalLeftIcon}>15</IconBtn>
    </div>
  );
}
const params = useParams();

const Post = async () => {
  const fetchedPost = await getSinglePost(params.slug);
  const [post, setPost] = useState(fetchedPost || null);
  // const [news, setNews] = useState([]);

  // const fetchByCategory = (category: string) => {
  //   return getPostsByCategory(category);
  // };



  useEffect(() => {
    setPost(fetchedPost);
  }, [fetchedPost]);


  // useEffect(() => {
  //   fetchByCategory("news").then((res) => setNews(res));
  // }, []);


  if (!post) {
    return <p>loading</p>;
  }

  return (
    <div className="px-4">
      <section className="wrapper [&>p]:text-base [&>*]:my-3 [&>p]:sm:text-lg leading-relaxed">
        <h1 className="py-5 text-4xl sm:text-5xl capitalize font-bold">
          {post?.title}
        </h1>
        <p>{parse(post?.excerpt)}</p>
        <span className="block border border-solid border-gray-300 my-5"></span>
        <SharingLinks />
        <Image src={post?.featuredImage?.node?.sourceUrl || ""} alt="" />
        <Author
          author={post?.author?.node?.name}
          createDate={post?.date}
          updateDate={post?.date}
          readTime={5}
        />
        <p>{post?.content}</p>
        <SocialMediaLinks />

        <SharingLinks />
        <span className="block my-5">
          <ExploreSuggestion country="New Zealand">
            Why do we travel? For food, culture, adventure, natural beauty? Our
            2023 list has all those elements, and more.
          </ExploreSuggestion>
          <ExploreSuggestion country="Kyoto">
            As tourism returns, Kyoto is grappling with how to accommodate the
            crowds and avoid the excesses of Instagram-driven itineraries.
          </ExploreSuggestion>
          <ExploreSuggestion country="Hawaii">
            How farm stays and eco-friendly snorkeling trips can be more
            entertaining than sitting on a beach with a mai tai.
          </ExploreSuggestion>
          <ExploreSuggestion country="New York City">
            A packed weekend in the city includes bites of local history, prime
            people-watching and a little Manhattan glamour.
          </ExploreSuggestion>
          <ExploreSuggestion country="Mexico City">
            Few places conjure Mexico City’s mix of vibrant style, outstanding
            gastronomy, rich history and bustling street life.
          </ExploreSuggestion>
        </span>
      </section>
      {/* <section>
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
      </section> */}
    </div>
  );
};

export default Post;