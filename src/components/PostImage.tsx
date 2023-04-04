import Image from "next/image";

interface IProps {
  image: {
    src: string;
    alt: string;
  };
  height?: number;
  width?: number;
  description?: string;
  fullBleed?: boolean;
}

const PostImage = ({
  image,
  height = 945,
  width = 615,
  description,
  fullBleed = false,
}: IProps) => {
  return (
    <div className={`block ${fullBleed && "full-bleed"}`}>
      <Image
        src={image.src}
        height={height}
        width={width}
        alt={image.alt}
        className={`${fullBleed && "w-full"}`}
      />
      {description && (
        <p className="text-md text-gray-500 max-w-[70%] py-2">{description}</p>
      )}
    </div>
  );
};

export default PostImage;
