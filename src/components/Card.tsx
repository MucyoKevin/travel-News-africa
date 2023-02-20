import Image from "next/image";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  image: { src: string; alt: string };
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
  sm = false ,
}: CardProps) => {
  if(sm) {
    height= 136,
    width= 207
  }
  
  return (
    <div className="flex flex-col max-w-sm p-2">
      <Image src={image.src} height={height} width={width} alt={image.alt}  />
      <div>
      <h2 className={`pt-3 ${sm ? 'text' : 'text-lg font-bold'}  text-xl hover:underline`}>
        <Link href={href}>{title}</Link>
      </h2>
      {!sm && <p className="text-sm truncate">{children}</p>}
      </div>
    </div>
  );
};

export default Card;

// Long card

interface LongCardProps{
  children :React.ReactNode;
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
  href 
}:LongCardProps) => {
  return (  
    <div className="flex flex-row p-4 ">
      <div className="flex flex-col pr-2 justify-center">
          <h2 className="hover:underline  mb-2 text-5xl capitalize font-bold">
            <Link href={href}> {title}</Link>
          </h2>
          <p className="text-lg text-left font-medium whitespace-normal">
            {children}
          </p>
      </div>
      <Image src={image.src} height={height} width={width} alt={image.alt} />
      
    </div>
  );
}
 
// wide card

interface WideCardProps{
  children :React.ReactNode;
  image: { src: string; alt: string };
  height?: number;
  width?: number;
  title: string;
  href: string;
}

export const WideCard =({
  children,
  image,
  height = 138,
  width = 205,
  title,
  href 
}:WideCardProps)=>{
  return(
    <div className="flex flex-row pb-2 justify-around border-b-2 ">
        <div className="items-center">
          <p className="p-3 whitespace-nowrap ">Feb,16 -2023</p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="hover:underline  mb-2 text-xl capitalize font-bold">
            <Link href={href}> {title} </Link> 
          </h2>
          <p className=" text-sm ">{children}</p>
        </div>
        <Image src={image.src} height={height} width={width} alt={image.alt} />
    </div>
  )
}