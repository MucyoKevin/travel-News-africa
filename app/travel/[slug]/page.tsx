import {
  GiftIcon,
  BookmarkIcon,
  ShareIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import IconBtn from "@/components/IconButton";
import PostImage from "@/components/PostImage";
import Author from "@/components/AuthorCard";
import Button from "@/components/Button";
import Card from "@/components/Card";

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

const Post = () => {
  return (
    <div className="px-4">
      <section className="wrapper [&>p]:text-base [&>*]:my-3 [&>p]:sm:text-lg leading-relaxed">
        <h1 className="py-5 mb-2 text-4xl sm:text-5xl capitalize font-bold">
          Greenland Wants You to Visit. <br /> But Not All at Once.
        </h1>
        <p>
          The Arctic island, renowned for its glaciers and fjords, is expanding
          airports and hotels to energize its economy, even as it tries to avoid
          the pitfalls of overtourism.
        </p>
        <span className="block border border-solid border-gray-300 my-5"></span>
        <SharingLinks />
        <PostImage
          image={{
            src: "/greenland-hd-1.webp",
            alt: "greenland image",
          }}
          fullBleed
          description="Ilulissat’s icy fjord, a UNESCO World Heritage site, is one of Greenland’s main tourist destinations even though its airport is currently too small to accommodate large jets.Credit..."
        />
        <Author
          author="Gabriel Leigh"
          createDate="Feb. 21, 2023"
          updateDate="Feb. 22, 2023"
          readTime={5}
        />
        <p>
          “The weather decides”: It could almost be the motto of Greenland.
          Visitors drawn to this North Atlantic island to see its powder blue
          glaciers, iceberg-clogged fjords and breathtakingly stark landscapes
          quickly learn to respect the elements, and they’re sometimes rewarded
          for it.
        </p>
        <p>
          One cold December day, I was waiting for a delayed flight in
          Kangerlussuaq, a former U.S. military base just above the Arctic
          Circle, when a friendly Air Greenland pilot named Stale asked if I’d
          like to join him on a drive to the harbor to “pick up some musk ox
          heads.” The offer seemed very Greenlandic, so how could I refuse?
        </p>
        <p>
          By early afternoon, it was already getting dark. We hopped into a
          pickup truck and headed down a long, icy road. At the water’s edge,
          Stale picked up a musk ox skull — they are kept as trophies, and the
          horns can be valuable for carving and toolmaking. Then we drove up a
          snow-covered mountain. The full moon illuminated the fjord below. Next
          to it, the town looked like a lunar base: a small pocket of human
          activity nestled in a seemingly infinite void.
        </p>
        <PostImage
          image={{
            src: "/greenland-hd-4.webp",
            alt: "greenland image",
          }}
          fullBleed
          description="The airport in Kangerlussuaq, a former U.S. military base, is where most international flights to Greenland currently land because of its large runway. Passengers must change to smaller aircraft to continue on to destinations like Ilulissat and Nuuk, the capital.Credit..."
        />
        <p>
          The new jet is part of a plan to invigorate the island’s tourism
          industry. Greenland, which is part of Denmark but has autonomy over
          most domestic affairs, is investing hundreds of millions of dollars in
          transportation, building new runways and terminals in Nuuk and
          Ilulissat. If all goes according to the government’s plan, large jets
          could bring international visitors directly to these towns by 2024.
        </p>
        <p>
          The 35-year-old prime minister, Mute B. Egede, who supports eventual
          independence from Denmark, sees tourism as a way to build economic
          self-sufficiency. The government has banned all oil exploration and
          has been cautious about expanding mining despite the potential for
          profits: It blocked the development of one rare-earth mining project
          over fears about uranium contamination.
        </p>
        <PostImage
          image={{
            src: "/greenland-hd-3.webp",
            alt: "greenland image",
          }}
          description="The airport in Kangerlussuaq, a former U.S. military base, is where most international flights to Greenland currently land because of its large runway. Passengers must change to smaller aircraft to continue on to destinations like Ilulissat and Nuuk, the capital.Credit..."
        />
        <p>
          The chief executive of Air Greenland, Jacob Nitter Sorensen, told me
          last year that the airline has North America in its sights, with New
          York as a top destination. That would put Nuuk just a four-hour hop
          away from the U.S. East Coast, meaning Americans would no longer need
          to backtrack from Copenhagen. (Nearly all flights to Greenland
          currently pass through the Danish capital.) But a sudden surge of
          tourists could strain Greenland’s limited infrastructure, and
          challenge what makes the island special. Visitors come to experience
          its remoteness.{" "}
        </p>
        <p>
          Fly down the west coast and you’ll pass countless fjords and glaciers
          crowded only with birds and reindeer. You’re more likely to spot
          wildlife like humpback whales, narwhals, polar bears and musk oxen
          than to see a tour bus. Some locals worry about becoming the next
          Iceland, which has struggled to cope with hordes of tourists and
          rising prices as that island’s popularity has exploded in the last
          decade.
        </p>

        <SocialMediaLinks />
        <Button path="#">Read 93 comments</Button>

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
      <section className="flex flex-col sm:flex-nowrap sm:flex-row">
        <div className="sm:basis-[66.67%] p-2 mr-1">
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">More in Travel</h2>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
          </div>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
          </div>
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">Editors’ Picks</h2>
          <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap">
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
            <Card
              href="#"
              title="What Did You Spend on Your Vacation? We'd Love to Hear."
              image={{
                src: "/image-one.jpg",
                alt: "Something",
              }}
              sm
            />
          </div>
        </div>
        <div className="sm:basis-[33.33%] p-2">
          <span className="block border border-solid border-gray-300 my-5"></span>
          <h2 className="text-2xl font-bold m-3">Most Popular</h2>
          <div className="flex flex-col flex-wrap ">
            <Card
              href="#"
              title="‘Saturday Night Live’ Mocks Trump’s Trip to Ohio"
              sm
            />
            <Card
              href="#"
              title="Give Your Heirloom Jewelry a Modern Makeover"
              sm
            />
            <Card
              href="#"
              title="The Remains of a Son Missing for Nearly 50 Years Are Identified"
              sm
            />
            <Card
              href="#"
              title="The Remains of a Son Missing for Nearly 50 Years Are Identified"
              sm
            />
            <Card
              href="#"
              title="After Model’s Gruesome Killing, Suspicion Falls on Ex-Husband and His Family"
              sm
            />
            <Card href="#" title="Enter the New Era of Stealth Wealth" sm />
            <Card
              href="#"
              title="Overlooked No More: Clara Driscoll, Designer of Visions in Glass for Tiffany"
              sm
            />
            <Card
              href="#"
              title="Is This Fashion’s Most Knocked-Off Shoe Design?"
              sm
            />
            <Card
              href="#"
              title="‘I Could See All of My Neighbors Sitting Out on Their Porch Steps’"
              sm
            />
            <Card
              href="#"
              title="He Survived the Trade Center Bombing. ‘I Always Knew They’d Be Back.’"
              sm
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
