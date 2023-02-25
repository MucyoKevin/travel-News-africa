import {
  GiftIcon,
  BookmarkIcon,
  ShareIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import IconBtn from "@/components/IconButton";
import PostImage from "@/components/PostImage";
import Author from "@/components/AuthorCard";

const Post = () => {
  return (
    <section className="wrapper [&>*]:my-3 [&>p]:text-lg leading-7">
      <h1 className="py-5 mb-2 text-5xl capitalize font-bold">
        Greenland Wants You to Visit. <br /> But Not All at Once.
      </h1>
      <p>
        The Arctic island, renowned for its glaciers and fjords, is expanding
        airports and hotels to energize its economy, even as it tries to avoid
        the pitfalls of overtourism.
      </p>
      <span className="block border border-solid border-gray-500 my-5"></span>
      <div className="flex flex-nowrap">
        <IconBtn icon={GiftIcon}>Give this article</IconBtn>
        <IconBtn icon={BookmarkIcon} />
        <IconBtn icon={ShareIcon} />
        <IconBtn icon={ChatBubbleOvalLeftIcon}>15</IconBtn>
      </div>
      <PostImage
        image={{
          src: "/greenland-1.webp",
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
        Kangerlussuaq, a former U.S. military base just above the Arctic Circle,
        when a friendly Air Greenland pilot named Stale asked if I’d like to
        join him on a drive to the harbor to “pick up some musk ox heads.” The
        offer seemed very Greenlandic, so how could I refuse?
      </p>
      <p>
        By early afternoon, it was already getting dark. We hopped into a pickup
        truck and headed down a long, icy road. At the water’s edge, Stale
        picked up a musk ox skull — they are kept as trophies, and the horns can
        be valuable for carving and toolmaking. Then we drove up a snow-covered
        mountain. The full moon illuminated the fjord below. Next to it, the
        town looked like a lunar base: a small pocket of human activity nestled
        in a seemingly infinite void.
      </p>
      <PostImage
        image={{
          src: "/greenland-4.webp",
          alt: "greenland image",
        }}
        fullBleed
        description="The airport in Kangerlussuaq, a former U.S. military base, is where most international flights to Greenland currently land because of its large runway. Passengers must change to smaller aircraft to continue on to destinations like Ilulissat and Nuuk, the capital.Credit..."
      />
      <p>
        The new jet is part of a plan to invigorate the island’s tourism
        industry. Greenland, which is part of Denmark but has autonomy over most
        domestic affairs, is investing hundreds of millions of dollars in
        transportation, building new runways and terminals in Nuuk and
        Ilulissat. If all goes according to the government’s plan, large jets
        could bring international visitors directly to these towns by 2024.
      </p>
      <p>
        The 35-year-old prime minister, Mute B. Egede, who supports eventual
        independence from Denmark, sees tourism as a way to build economic
        self-sufficiency. The government has banned all oil exploration and has
        been cautious about expanding mining despite the potential for profits:
        It blocked the development of one rare-earth mining project over fears
        about uranium contamination.
      </p>
      <PostImage
        image={{
          src: "/greenland-3.webp",
          alt: "greenland image",
        }}
        description="The airport in Kangerlussuaq, a former U.S. military base, is where most international flights to Greenland currently land because of its large runway. Passengers must change to smaller aircraft to continue on to destinations like Ilulissat and Nuuk, the capital.Credit..."
      />
      <p>
        The chief executive of Air Greenland, Jacob Nitter Sorensen, told me
        last year that the airline has North America in its sights, with New
        York as a top destination. That would put Nuuk just a four-hour hop away
        from the U.S. East Coast, meaning Americans would no longer need to
        backtrack from Copenhagen. (Nearly all flights to Greenland currently
        pass through the Danish capital.) But a sudden surge of tourists could
        strain Greenland’s limited infrastructure, and challenge what makes the
        island special. Visitors come to experience its remoteness.{" "}
      </p>
      <p>
        Fly down the west coast and you’ll pass countless fjords and glaciers
        crowded only with birds and reindeer. You’re more likely to spot
        wildlife like humpback whales, narwhals, polar bears and musk oxen than
        to see a tour bus. Some locals worry about becoming the next Iceland,
        which has struggled to cope with hordes of tourists and rising prices as
        that island’s popularity has exploded in the last decade.
      </p>
    </section>
  );
};

export default Post;
