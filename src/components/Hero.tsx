import Card, { WideCard } from "./Card";
import { LongCard } from "./Card";

const Hero = () => {
  return (
    <section>
      <div className="border-b-2 my-5">
        <LongCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </LongCard>
      </div>

      <div className="flex flex-row justify-between divide-x-2 my-5 ">
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
      </div>

      <div className="flex flex-row py-5 space-x-4 divide-x-2">
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
          sm
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
          sm
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
          sm
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
          sm
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
        <Card
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "Something",
          }}
          sm
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </Card>
      </div>
      <div className="flex flex-col">
        <WideCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </WideCard>
        <WideCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </WideCard>
        <WideCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </WideCard>
        <WideCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </WideCard>
        <WideCard
          href="#"
          title="What Did You Spend on Your Vacation? We'd Love to Hear."
          image={{
            src: "/image-one.jpg",
            alt: "something",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempora non pariatur corporis id laudantium molestiae cum dolore sint
          alias. Minima asperiores dolorum amet explicabo debitis porro natus
          dolores dicta.
        </WideCard>
      </div>
    </section>
  );
};

export default Hero;
