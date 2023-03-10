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
    <div className="flex flex-col px-2 max-w-sm min-w-[240px] my-2">
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
            sm ? "text font-bold" : "text-3xl font-bold"
          }  text-xl hover:underline`}
        >
          <Link href={href}>{title}</Link>
        </h2>
        {!sm && children && <p className="text-sm truncate my-3">{children}</p>}
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
          <Link href={href}> {title}</Link>
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
  image: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
}

export const WideCard = ({
  children,
  image,
  height = 138,
  width = 205,
  title,
  href,
}: WideCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row py-5 px-2 justify-around items-stretch border-b-2 max-w-5xl">
      <div className="">
        <p className="p-3 whitespace-nowrap hidden sm:block">Feb,16 -2023</p>
      </div>
      <h2 className="hover:underline m-2 text-2xl sm:hidden  capitalize font-bold">
        <Link href={href}> {title} </Link>
      </h2>
      <div className="pl-2 sm:flex sm:flex-col">
        <h2 className="hover:underline m-2 text-2xl sm:text-2xl hidden sm:block capitalize font-bold">
          <Link href={href}> {title} </Link>
        </h2>
        <Image
          className="max-w-[150px] max-h-[99px] float-right mr-4 mb-4 sm:hidden"
          src={image.src}
          height={height}
          width={width}
          alt={image.alt}
        />
        <p className="text-lg clear-left">{children}</p>
      </div>
      <Image
        className="hidden sm:block"
        src={image.src}
        height={height}
        width={width}
        alt={image.alt}
      />
    </div>
  );
};
