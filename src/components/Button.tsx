import Link from "next/link";

interface IProps {
  path: string;
  children: React.ReactNode;
}

const Button = ({ path, children }: IProps) => {
  return (
    <Link
      href={`/${path}`}
      className="flex justify-center items-center uppercase bg-slate-600 text-white px-2 lg;px-8 py-2 lg;py-4 text-xs font-medium hover:bg-slate-900 rounded"
    >
      {children}
    </Link>
  );
};

export default Button;
