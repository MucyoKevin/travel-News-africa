// @ts-nocheck
"use client";
import Link from "next/link";
import Author from "@/components/AuthorCard";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { getPosts, getPostsbyTag, getSinglePost } from "app/graphql/queries";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import SharingButton from "@/components/SharingButton";
import Loading from "@/components/Loading";

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

const Post = ({ params }) => {
  const [post, setPost] = useState();
  const [editorsPick, setEditorsPick] = useState([]);
  const [morePosts, setMorePosts] = useState([]);

  const getPost = async (slug: string) => {
    const fetchedPost = await getSinglePost(slug);
    setPost(fetchedPost);
  };

  const fetchByTag = (tag: string) => {
    return getPostsbyTag(tag);
  };

  const fetchMorePosts = () => {
    return getPosts();
  };

  useEffect(() => {
    fetchByTag("editors-pick").then((res) => setEditorsPick(res));
  }, []);

  useEffect(() => {
    getPost(params.slug);
    fetchMorePosts().then((res) => setMorePosts(res));
  }, []);

  if (!post) {
    return (
      <div className="flex w-full h-96">
        <Loading className="mx-auto" />
      </div>
    );
  }

  return (
    <div className="px-4">
      <section className="wrapper [&>p]:text-base [&>*]:my-3 [&>p]:sm:text-lg leading-relaxed">
        <h1 className="py-5 mb-2 text-4xl sm:text-5xl capitalize font-bold">
          {(post && post?.title) || ""}
        </h1>
        <p>{(post && parse(post?.excerpt)) || ""}</p>
        <span className="block border border-solid border-gray-300 my-5"></span>
        <SharingButton />
        {(post && parse(post?.content)) || ""}
        <Author
          author={(post && post?.author?.node?.name) || ""}
          createDate="23/04/2023"
          updateDate="23/04/2023"
          readTime={5}
        />
        <SocialMediaLinks />
        <Button path="#">Read 93 comments</Button>

        <SharingButton />

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
      <section className="flex flex-col sm:flex-nowrap sm:flex-row">
        <div className="sm:basis-[66.67%] p-2 mr-1">
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">More in Travel</h2>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            {morePosts &&
              morePosts.slice(0, 3).map(({ node: morePosts }) => (
                <Card
                  key={morePosts.slug || ""}
                  href={`${morePosts.slug || ""}`}
                  title={morePosts.title || ""}
                  image={{
                    src: morePosts?.featuredImage?.node?.sourceUrl || "",
                    alt: "Something",
                  }}
                  sm
                />
              ))}
          </div>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            {morePosts &&
              morePosts.slice(3, 6).map(({ node: morePosts }) => (
                <Card
                  key={morePosts.slug || ""}
                  href={`${morePosts.slug || ""}`}
                  title={morePosts.title || ""}
                  image={{
                    src: morePosts?.featuredImage?.node?.sourceUrl || "",
                    alt: "Something",
                  }}
                  sm
                />
              ))}
          </div>
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">Editors’ Picks</h2>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            {editorsPick &&
              editorsPick.slice(0, 3).map(({ node: editorsPick }) => (
                <Card
                  key={editorsPick?.slug || ""}
                  href={`${editorsPick?.slug || ""}`}
                  title={editorsPick?.title || ""}
                  image={{
                    src: editorsPick?.featuredImage?.node?.sourceUrl || "",
                    alt: "Something",
                  }}
                  sm
                />
              ))}
          </div>
        </div>
        <div className="sm:basis-[33.33%] p-2">
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">Most Popular</h2>
          <div className="flex flex-col flex-wrap ">
            {morePosts &&
              morePosts
                .slice(0, 10)
                .map(({ node: morePosts }) => (
                  <Card
                    key={morePosts.slug || ""}
                    href={morePosts.slug || ""}
                    title={morePosts.title || ""}
                  />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
console.log(Post);
