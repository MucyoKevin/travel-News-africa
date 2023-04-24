import Image from "next/image";
import Link from "next/link";

interface CardProps {
  children?: React.ReactNode;
  image?: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
  sm?: boolean;
}

const Card = ({
  children,
  image,
  height = 246,
  width = 372,
  title,
  href,
  sm = false,
}: CardProps) => {
  if (sm) {
    (height = 136), (width = 207);
  }

  return (
    <div className="flex flex-col px-2 max-w-sm min-w-sm py-4 ">
      {image && (
        <Image
          className="w-full min-w-sm"
          src={image.src}
          height={height}
          width={width}
          alt={image.alt}
        />
      )}
      <div>
        <h2
          className={`pt-3 ${
            sm ? "text font-bold" : "text-3xl font-bold"
          }  text-xl hover:underline`}
        >
          <Link href={`/travel/${href}`}>{title}</Link>
        </h2>
        {!sm && children && <p className="text-sm  my-3">{children}</p>}
      </div>
    </div>
  );
};

export default Card;

// Long card

interface LongCardProps {
  children: React.ReactNode;
  image: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
}

export const LongCard = ({
  children,
  image,
  height = 630,
  width = 787,
  title,
  href,
}: LongCardProps) => {
  return (
    <div className="hidden sm:flex flex-row justify-between py-5">
      <div className="flex flex-col pr-2 justify-center basis-[40%]">
        <h2 className="hover:underline  mb-2 text-5xl capitalize font-bold">
          <Link href={`/travel/${href}`}> {title}</Link>
        </h2>
        <p className="text-lg text-left font-normal">{children}</p>
      </div>
      <Image
        className="basis-[60%]"
        src={image.src}
        height={height}
        width={width}
        alt={image.alt}
      />
    </div>
  );
};

// wide card

interface WideCardProps {
  children: React.ReactNode;
  image?: { src: string; alt: string };
  height?: number;
  width?: number;
  date: string;
  title: string;
  href: string;
}

export const WideCard = ({
  children,
  date,
  image,
  height = 138,
  width = 205,
  title,
  href,
}: WideCardProps) => {
  return (
    <div className="flex flex-col-reverse mx-2 md:grid md:grid-cols-6 md:gap-5 md:max-w-5xl my-6 md:my-2">
      <div className="col-span-1 my-1">
        <p className="font-bold">{new Date(date).toDateString()}</p>
      </div>
      <div className="col-span-3 sm:flex sm:flex-col my-1">
        <h2 className="hover:underline text-2xl sm:text-2xl sm:block capitalize font-bold">
          <Link href={`/travel/${href}`}> {title} </Link>
        </h2>
        <p className="text-lg clear-left">{children}</p>
      </div>
      {image && (
        <Image
          className="col-span-2 w-full"
          src={image.src}
          height={height}
          width={width}
          alt={image.alt}
        />
      )}
    </div>
  );
};

// first card

interface FirstCardProps {
  children?: React.ReactNode;
  image?: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
  sm?: boolean;
}

export const FirstCard = ({
  children,
  image,
  height = 420,
  width = 380,
  title,
  href,
  sm = false,
}: FirstCardProps) => {
  if (sm) {
    (height = 136), (width = 207);
  }

  return (
    <div className="flex flex-col px-2 max-w-[400px] min-w-[240px] py-4 h-[500px]">
      {image && (
        <Image
          className="w-full"
          src={image.src}
          height={height}
          width={width}
          alt={image.alt}
        />
      )}
      <div>
        <h2
          className={`pt-3 ${
            sm ? "text font-bold" : "text-4xl font-bold"
          }  text-xl hover:underline`}
        >
          <Link href={`/travel/${href}`}>{title}</Link>
        </h2>
        {!sm && children && (
          <p className="text-sm indent-4  my-3">{children}</p>
        )}
      </div>
    </div>
  );
};
