import Image from "next/image";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  image: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
}

const Card = ({
  children,
  image,
  height = 246,
  width = 372,
  title,
  href,
}: CardProps) => {
  return (
    <div className="flex flex-col max-w-md">
      <Image src={image.src} height={height} width={width} alt={image.alt} />
      <h2 className="pt-3">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="">{children}</p>
    </div>
  );
};

export default Card;
